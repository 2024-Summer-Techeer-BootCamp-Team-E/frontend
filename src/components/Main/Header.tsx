import React, { useState } from 'react'
import Like from '../../assets/images/Liked.png'
import Logo from '../../assets/images/Logo.png'
import LoginModal from '../User/LoginModal'
import SignupModal from '../User/SignupModal'

const Header = () => {
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
      <div className="flex items-center ml-6">
        <div className="text-2xl font-bold cursor-pointer text-hongsi">알뜰</div>
        <img src={Logo} alt="Logo" className="w-[80px] h-[110px]" />
        <div className="text-2xl font-bold cursor-pointer text-hongsi">살뜰</div>
      </div>

      <div className="flex items-center gap-5 mr-6">
        <img src={Like} alt="Liked" className="w-8 h-8 cursor-pointer" />

        <button className="w-24 h-10 text-sm font-semibold bg-white border border-gray-300 rounded-lg" onClick={handleOpenLogin}>
          로그인
        </button>
        <button className="w-24 h-10 text-sm font-semibold text-white rounded-lg bg-hongsi" onClick={handleOpenSignup}>
          회원가입
        </button>
      </div>
      {isLoginModalOpen && <LoginModal closeLoginModal={handleCloseLogin} openSignupModal={handleOpenSignup} />}
      {isSignupModalOpen && <SignupModal closeSignupModal={handleCloseSignup} openLoginModal={handleOpenLogin} />}
    </header>
  )
}

export default Header
