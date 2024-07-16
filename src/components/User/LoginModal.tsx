import { useState } from 'react'
import axios from 'axios'
import useModalStore from '../../store/useModalStore'

const LoginModal = () => {
  const { closeLoginModal, openSignupModal } = useModalStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/accounts/login/', {
        email,
        password,
      })

      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)

      closeLoginModal()
      window.location.reload()
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <div className="fixed top-0 z-20 flex items-center justify-center w-screen h-screen snap-none bg-black/30 backdrop-blur-[2px]">
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
