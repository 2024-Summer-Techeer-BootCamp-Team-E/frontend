import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import useModalStore from '../store/useModalStore'

interface MenuBtnProps {
  children: string
}

const MenuBtn = ({ children }: MenuBtnProps) => {
  const { openLoginModal } = useModalStore()
  const navigate = useNavigate()
  const handleClick = () => {
    if (children === '메인페이지') {
      navigate('/')
    } else if (children === '로그아웃') {
      localStorage.removeItem('accessToken')
      Cookies.remove('refreshToken')
      navigate('/')
      alert('로그아웃 성공')
    } else if (children === '깃허브') {
      window.open('https://github.com/2024-Summer-Techeer-BootCamp-Team-E', '_blank')
    } else if (children === '좋아요') {
      navigate('/liked')
    } else {
      alert('로그인이 필요합니다.')
      openLoginModal()
    }
  }
  return (
    <button className="hover:text-hongsi" onClick={handleClick}>
      {children}
    </button>
  )
}

export default MenuBtn
