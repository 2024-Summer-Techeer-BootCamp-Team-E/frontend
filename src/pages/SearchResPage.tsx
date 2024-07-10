import Footer from '../components/Footer'
import Glass from '../assets/images/Glass.png'
import Test from '../assets/images/SearchTest1.png'
import HamburgerMenu from '../components/HamburgerMenu'
import OriginBtn from '../components/SearchRes/OriginBtn'
import ALiProducts from '../components/SearchRes/ALiProducts'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function SearchResPage() {
  const navigate = useNavigate()
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
    <div className="flex">
      <div className="flex flex-col items-center w-screen h-screen">
        <div className="flex flex-col justify-center gap-5">
          <div className="relative flex items-center justify-between px-6 bg-mainBg w-[62.5rem] h-14 mt-5">
            <span className="text-2xl font-bold cursor-pointer text-hongsi" onClick={HandleClickLogo}>
              알뜰살뜰
            </span>
            <div className="relative">
              <input className="w-[500px] h-9 bg-white border rounded-lg outline-none pl-8 text-black/40" placeholder="www.example.com" />
              <img src={Glass} alt="돋보기" className="absolute w-5 h-5 left-2 top-2" />
            </div>
            <div onClick={handleClickMenu}>
              <HamburgerMenu />
            </div>

            {menu && (
              <div className="absolute -right-40 top-1">
                <div className="relative flex flex-col items-center justify-center w-32 gap-4 p-2 text-center rounded-lg shadow-xl h-44 bg-mainBg">
                  <button className="hover:text-hongsi" onClick={HandleClickLogo}>
                    Home
                  </button>
                  <button className="hover:text-hongsi" onClick={HandleClickLiked}>
                    Liked
                  </button>
                  <button className="hover:text-hongsi">Setting</button>
                  <button className="hover:text-hongsi">Sign out</button>
                  <div className="absolute w-5 h-5 transform rotate-45 -translate-x-1/2 shadow-xl bg-mainBg top-2 -left-0.5" />
                </div>
              </div>
            )}
          </div>
          <div className="w-[62.5rem] bg-mainBg h-64 flex justify-center items-center">
            <div className="flex items-center justify-center w-1/2">
              <img src={Test} className="w-52 h-52" />
            </div>
            <div className="flex flex-col w-1/2 gap-5 pl-6 pr-20 font-semibold">
              <p className="text-base">UV차단 초경량 완전자동 3단 암막 자동우산 튼튼한 미니 양우산</p>
              <p className="text-lg text-black/50">Delivery : ₩ 2500</p>
              <p className="text-2xl text-hongsi">₩ 2500</p>
              <div className="flex justify-around">
                <OriginBtn>Share</OriginBtn>
                <div />
                <OriginBtn>Visit Link</OriginBtn>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-10">
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
    </div>
  )
}
