import Footer from '../components/Footer'
import Glass from '../assets/images/Glass.png'
import HamburgerMenu from '../components/HamburgerMenu'
import OriginBtn from '../components/SearchRes/OriginBtn'
import ALiProducts from '../components/SearchRes/ALiProducts'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginModal from '../components/User/LoginModal'
import useModalStore from '../store/useModalStore'
import Cookies from 'js-cookie'
import SignupModal from '../components/User/SignupModal'

export default function SearchResPage() {
  const { isLoginModalOpen, isSignupModalOpen, openLoginModal, openSignupModal } = useModalStore()

  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state.data
  const [ali, setAli] = useState([])
  const [menu, setMenu] = useState(false)
  const token = localStorage.getItem('accessToken')
  const handleClickMenu = () => {
    setMenu(!menu)
  }
  const HandleClickLogo = () => {
    navigate('/')
  }
  const HandleClickLiked = () => {
    if (token) {
      navigate('/liked')
    } else {
      alert('로그인이 필요합니다.')
    }
  }
  const handleClickKeyword = async () => {
    console.log('클릭')
    try {
      const response = await axios.post('/api/v1/products/keyword/', {
        name: data.name,
      })
      console.log('상품네임: ', data.name)
      console.log(response.data[0])
      // navigate('/searchres', { state: { data: response.data } })
    } catch (error) {
      console.log('Error', error)
    }
  }
  const logout = () => {
    localStorage.removeItem('accessToken')

    Cookies.remove('refreshToken')

    // Navigate to home and reload
    navigate('/')
    window.location.reload()
    alert('로그아웃 성공')
  }
  const handleClickAli = async () => {
    console.log('클릭')
    try {
      const response = await axios.post('/api/v1/products/info', {
        url: data.url,
      })
      console.log('상품 링크: ', data.name)
      console.log(response.data)
      setAli(response.data)
      console.log('알리알리 : ', ali)
    } catch (error) {
      console.log('Error', error)
    }
  }
  useEffect(() => {
    handleClickAli()
  }, [])
  return (
    <div className="flex flex-col justify-start w-screen h-screen">
      <div className="flex flex-col items-center gap-5 px-2">
        <div className="flex relative items-center justify-between px-6 bg-mainBg w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-14 mt-5">
          <span className="text-2xl font-bold cursor-pointer text-hongsi" onClick={HandleClickLogo}>
            알뜰살뜰
          </span>
          <div className="relative ">
            <input className="hidden md:block md:w-[300px] lg:w-[400px] xl:w-[500px] pl-8 bg-white border rounded-lg outline-none h-9 text-black/40" placeholder="www.example.com" />
            <img src={Glass} alt="돋보기" className="absolute w-5 h-5 left-2 top-2" />
          </div>
          <div onClick={handleClickMenu}>
            <HamburgerMenu />
          </div>
          {menu && (
            <div className="absolute z-10 border xl:-right-40 xl:top-2 top-20 border-black/5 right-5">
              <div className="z-0 absolute w-5 h-5 transform rotate-45 border border-black/3 -translate-x-1/2 shadow-xl bg-mainBg xl:top-2 xl:-left-[1px] -top-2 left-24 " />
              <div className="relative flex flex-col items-center justify-center w-32 gap-4 p-2 text-center shadow-xl h-44 bg-mainBg">
                <button className="hover:text-hongsi" onClick={HandleClickLogo}>
                  메인페이지
                </button>
                <button className="hover:text-hongsi" onClick={HandleClickLiked}>
                  좋아요
                </button>
                <button className="hover:text-hongsi" onClick={handleClickKeyword}>
                  깃허브
                </button>
                {token ? (
                  <button className="hover:text-hongsi" onClick={logout}>
                    로그아웃
                  </button>
                ) : (
                  <button className="hover:text-hongsi" onClick={openLoginModal}>
                    로그인
                  </button>
                )}
                {isLoginModalOpen && <LoginModal />}
                {isSignupModalOpen && <SignupModal />}
              </div>
            </div>
          )}
        </div>
        <div className="w-full sm:pr-4 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] bg-mainBg h-64 flex justify-center items-center">
          <div className="flex items-center justify-center w-1/2">
            <img src={data.image_url} className="w-40 h-40 sm:w-52 sm:h-52" />
          </div>
          <div className="flex flex-col w-1/2 gap-5 p-4 font-semibold ">
            <p className="text-sm sm:text-base">{data.name}</p>
            <p className="text-sm sm:text-base text-black/50">Delivery : ₩ {data.delivery_charge}</p>
            <p className="text-lg sm:text-2xl text-hongsi">₩ {data.price}</p>
            <div className="flex justify-between">
              <OriginBtn link={data.search_url}>Share</OriginBtn>
              <OriginBtn link={data.search_url}>Visit Link</OriginBtn>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] grid lg:grid-cols-4 grid-cols-3 gap-3 mb-10">
          {ali.map((product: any) => (
            <ALiProducts key={product.id} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
