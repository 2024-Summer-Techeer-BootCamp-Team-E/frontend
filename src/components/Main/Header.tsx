import { useLinkClickHandler } from 'react-router-dom'
import Like from '../../assets/images/Liked.png'
import Logo from '../../assets/images/Logo.png'

// Header 컴포넌트 정의
export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-screen h-20 p-4 px-10 bg-white ">
      <div className="flex items-center">
        <div className="text-2xl font-bold cursor-pointer text-hongsi">알뜰</div>
        <img src={Logo} alt="Logo" className="w-[80px] h-[110px]" />
        <div className="text-2xl font-bold cursor-pointer text-hongsi">살뜰</div>
      </div>

      <div className="flex items-center gap-5">
        <img src={Like} alt="Liked" className="w-8 h-8 cursor-pointer" />

        <button className="w-24 h-10 text-sm font-semibold bg-white border border-gray-300 rounded-lg">로그인</button>
        <button className="w-24 h-10 text-sm font-semibold text-white rounded-lg bg-hongsi">회원가입</button>
      </div>
    </header>
  )
}
