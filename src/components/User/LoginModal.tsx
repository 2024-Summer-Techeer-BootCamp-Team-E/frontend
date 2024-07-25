import { useState } from 'react'
import axios from 'axios'
import useModalStore from '../../store/useModalStore'
import Cookies from 'js-cookie'

const LoginModal = () => {
  const { closeLoginModal, openSignupModal } = useModalStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateEmail = (email: string) => {
    // 이메일 형식 확인을 위한 정규 표현식
    const re = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
    return re.test(email)
  }

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      alert('이메일 주소가 유효하지 않습니다.')
      return
    }

    if (!password) {
      alert('비밀번호를 입력하세요.')
      return
    }

    try {
      const response = await axios.post('/api/v1/accounts/login/', {
        email,
        password,
      })

      localStorage.setItem('accessToken', response.data.access)

      Cookies.set('refreshToken', response.data.refresh)

      closeLoginModal()
      alert('로그인 성공!')
      window.location.reload()
    } catch (error: any) {
      console.log('Error', error)
      if (error.response && error.response.status === 401) {
        alert('로그인 중 오류가 발생했습니다. 나중에 다시 시도해주세요.')
      } else {
        alert('잘못된 비밀번호입니다.')
      }
    }
  }

  return (
    <div className="fixed left-0 top-0 z-20 flex items-center justify-center w-screen h-screen snap-none bg-black/30 backdrop-blur-[2px]">
      <div className="rounded-2xl shadow-lg w-[390px] h-[290px] bg-white px-9">
        <div className="flex items-center justify-between">
          <p className="mt-4 text-xl font-semibold">로그인</p>
          <button className="mt-4 text-lg cursor-pointer" onClick={closeLoginModal}>
            X
          </button>
        </div>
        <input className="pl-5 mt-5 text-lg text-black bg-white border rounded-lg outline-none w-80 h-11" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          className="pl-5 mt-5 text-lg text-black bg-white border rounded-lg outline-none w-80 h-11"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-5 text-xl font-bold text-white border rounded-lg shadow-lg w-80 h-11 bg-hongsi" onClick={handleLogin}>
          로그인
        </button>
        <div className="flex items-center justify-end mt-3">
          <button className="text-sm cursor-pointer text-hongsi hover:underline" onClick={openSignupModal}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
