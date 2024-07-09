import Me from '../assets/images/Me.png'
import Footer from '../components/Footer'
import Glass from '../assets/images/Glass.png'
import Test from '../assets/images/SearchTest1.png'
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
            <img src={Me} alt="menu" className="w-12 h-12 cursor-pointer" onClick={handleClickMenu} />
            {menu && (
              <div className="absolute -right-28 top-1">
                <div className="relative w-24 gap-2 p-2 text-center rounded-lg shadow-xl h-28 bg-mainBg">
                  <p className="hover:text-orange">Home</p>
                  <p className="hover:text-orange">Liked</p>
                  <p className="hover:text-orange">Setting</p>
                  <p className="hover:text-orange">Sign out</p>
                  <div className="absolute w-4 h-4 transform rotate-45 -translate-x-1/2 bg-mainBg top-2 shadow-xl -left-0.5" />
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
              <p className="text-2xl text-orange">₩ 2500</p>
              <div className="flex justify-between">
                <button className="w-40 text-sm font-semibold text-white rounded-md h-7 bg-hongsi/70 hover:bg-hongsi">Share</button>
                <button className="w-40 text-sm font-semibold text-white rounded-md h-7 bg-hongsi/70 hover:bg-hongsi">Viste Link</button>
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
