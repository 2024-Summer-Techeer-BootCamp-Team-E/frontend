import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import useModalStore from '../../store/useModalStore'
import LoginModal from '../User/LoginModal'
import SignupModal from '../User/SignupModal'
import Logo from '../../assets/images/Logo.png'
import Like from '../../assets/images/Liked.png'

const Header = ({ token }: { token: string | null }) => {
  const navigate = useNavigate()
  const { isLoginModalOpen, isSignupModalOpen, openLoginModal, openSignupModal } = useModalStore()

  const logout = () => {
    localStorage.removeItem('accessToken')

    Cookies.remove('refreshToken')

    // Navigate to home and reload
    navigate('/')
    window.location.reload()
    alert('로그아웃 성공')
  }
  const handleLikeClick = () => {
    if (token) {
      navigate('/liked')
    } else {
      alert('로그인이 필요합니다.')
    }
  }
  return (
    <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-full h-20 bg-white">
      <div className="flex items-center ml-6 text-md sm:text-2xl">
        <div className="font-bold cursor-pointer text-hongsi">알뜰</div>
        <img src={Logo} alt="Logo" className="hidden sm:block sm:w-[70px] sm:h-[90px]" />
        <div className="font-bold cursor-pointer text-hongsi">살뜰</div>
      </div>
      <div className="flex items-center gap-2 mr-6">
        <img src={Like} alt="Liked" className="w-8 h-8 cursor-pointer hover:scale-110" onClick={handleLikeClick} />
        {token ? (
          <button className="w-20 h-8 text-xs font-semibold text-white rounded-lg sm:w-24 sm:h-10 bg-hongsi sm:text-sm" onClick={logout}>
            로그아웃
          </button>
        ) : (
          <>
            <button className="w-20 h-8 text-xs font-semibold bg-white border border-gray-300 rounded-lg sm:w-24 sm:h-10 sm:text-sm" onClick={openLoginModal}>
              로그인
            </button>
            <button className="w-20 h-8 text-xs font-semibold text-white rounded-lg sm:w-24 sm:h-10 bg-hongsi sm:text-sm" onClick={openSignupModal}>
              회원가입
            </button>
          </>
        )}
      </div>
      {isLoginModalOpen && <LoginModal />}
      {isSignupModalOpen && <SignupModal />}
    </header>
  )
}

export default Header
