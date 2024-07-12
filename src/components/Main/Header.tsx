import LoginModal from '../User/LoginModal'
import SignupModal from '../User/SignupModal'
import Logo from '../../assets/images/Logo.png'
import Like from '../../assets/images/Liked.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true)
    setIsSignupModalOpen(false)
  }

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false)
  }

  const handleOpenSignup = () => {
    setIsSignupModalOpen(true)
    setIsLoginModalOpen(false)
  }

  const handleCloseSignup = () => {
    setIsSignupModalOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-screen h-20 bg-white">
      <div className="flex items-center ml-6 text-md sm:text-2xl ">
        <div className="font-bold cursor-pointer text-hongsi">알뜰</div>
        <img src={Logo} alt="Logo" className="hidden sm:block sm:w-[70px] sm:h-[90px]" />
        <div className="font-bold cursor-pointer text-hongsi">살뜰</div>
      </div>
      <div className="flex items-center gap-2 mr-6">
        <img
          src={Like}
          alt="Liked"
          className="w-8 h-8 cursor-pointer hover:scale-110"
          onClick={() => {
            navigate('/liked')
          }}
        />
        <button className="w-20 h-8 text-xs font-semibold bg-white border border-gray-300 rounded-lg sm:w-24 sm:h-10 sm:text-sm" onClick={handleOpenLogin}>
          로그인
        </button>
        <button className="w-20 h-8 text-xs font-semibold text-white rounded-lg sm:w-24 sm:h-10 bg-hongsi sm:text-sm" onClick={handleOpenSignup}>
          회원가입
        </button>
      </div>
      {isLoginModalOpen && <LoginModal closeLoginModal={handleCloseLogin} openSignupModal={handleOpenSignup} />}
      {isSignupModalOpen && <SignupModal closeSignupModal={handleCloseSignup} openLoginModal={handleOpenLogin} />}
    </header>
  )
}

export default Header
