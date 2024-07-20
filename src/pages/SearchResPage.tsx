import Footer from '../components/Footer'
import Glass from '../assets/images/Glass.png'
import HamburgerMenu from '../components/HamburgerMenu'
import OriginBtn from '../components/SearchRes/OriginBtn'
import ALiProducts from '../components/SearchRes/ALiProducts'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SearchResPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state.data
  const [menu, setMenu] = useState(false)
  const handleClickMenu = () => {
    setMenu(!menu)
  }
  const HandleClickLogo = () => {
    navigate('/')
  }
  const HandleClickLiked = () => {
    navigate('/liked')
  }
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
                <button className="hover:text-hongsi">깃허브</button>
                <button className="hover:text-hongsi">로그아웃</button>
              </div>
            </div>
          )}
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] bg-mainBg h-64 flex justify-center items-center">
          <div className="flex items-center justify-center w-1/2">
            <img src={data.image_url} className="w-40 h-40 sm:w-52 sm:h-52" />
          </div>
          <div className="flex flex-col w-1/2 gap-5 p-4 font-semibold">
            <p className="text-sm sm:text-base">{data.name}</p>
            <p className="text-sm sm:text-base text-black/50">Delivery : ₩ {data.delivery_charge}</p>
            <p className="text-lg sm:text-2xl text-hongsi">₩ {data.price}</p>
            <div className="flex justify-around">
              <OriginBtn link={data.search_url}>Share</OriginBtn>
              <div />
              <OriginBtn link={data.search_url}>Visit Link</OriginBtn>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] grid lg:grid-cols-4 grid-cols-3 gap-3 mb-10">
          <ALiProducts />
          <ALiProducts />
          <ALiProducts />
          <ALiProducts />
          <ALiProducts />
          <ALiProducts />
          <ALiProducts />
          <ALiProducts />
        </div>
      </div>
      <Footer />
    </div>
  )
}
