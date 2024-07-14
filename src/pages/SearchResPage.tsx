import Footer from '../components/Footer'
import Glass from '../assets/images/Glass.png'
import Test from '../assets/images/SearchTest2.jpg'
import HamburgerMenu from '../components/HamburgerMenu'
import OriginBtn from '../components/SearchRes/OriginBtn'
import ALiProducts from '../components/SearchRes/ALiProducts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div className="flex flex-col justify-start w-screen h-screen">
      <div className="flex flex-col items-center gap-5 px-2">
        <div className="flex items-center justify-between px-6 bg-mainBg w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-14 mt-5">
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
            <div className="absolute z-10 border xl:right-10 xl:top-7 top-24 border-black/5 right-10">
              <div className="z-0 absolute w-5 h-5 transform rotate-45 border border-black/3 -translate-x-1/2 shadow-xl bg-mainBg xl:top-2 xl:-left-[1px] -top-2 left-28 sm:left-20" />
              <div className="relative flex flex-col items-center justify-center w-32 gap-4 p-2 text-center shadow-xl h-44 bg-mainBg">
                <button className="hover:text-hongsi" onClick={HandleClickLogo}>
                  Home
                </button>
                <button className="hover:text-hongsi" onClick={HandleClickLiked}>
                  Liked
                </button>
                <button className="hover:text-hongsi">Github</button>
                <button className="hover:text-hongsi">Sign out</button>
              </div>
            </div>
          )}
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] bg-mainBg h-64 flex justify-center items-center">
          <div className="flex items-center justify-center w-1/2">
            <img src={Test} className="w-40 h-40 sm:w-52 sm:h-52" />
          </div>
          <div className="flex flex-col w-1/2 gap-5 p-4 font-semibold">
            <p className="text-sm sm:text-base">샤오미 무선 선풍기 BLDC 무소음 2PRO 정발 한국판</p>
            <p className="text-sm sm:text-base text-black/50">Delivery : ₩ 2500</p>
            <p className="text-lg sm:text-2xl text-hongsi">₩ 20000</p>
            <div className="flex justify-around">
              <OriginBtn>Share</OriginBtn>
              <div />
              <OriginBtn>Visit Link</OriginBtn>
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
