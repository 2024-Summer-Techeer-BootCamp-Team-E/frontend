import React from 'react'
import { useState } from 'react'
import axios from 'axios'

interface SignupModalProps {
  closeSignupModal: () => void
  openLoginModal: () => void
}

const SignupModal = ({ closeSignupModal, openLoginModal }: SignupModalProps) => {
  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const name = 'lyk'
  const [user_id, setUser_id] = useState('')
  // const [name, setName] = useState('')

  const handleSignup = async () => {
    if (password !== repeatPassword) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/accounts/register/', {
        user_id,
        password,
        name,
      })
      console.log(response.data)
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <div className="fixed top-0 z-20 flex items-center justify-center w-screen h-screen snap-none bg-black/30 backdrop-blur-[2px]">
      <div className="rounded-2xl shadow-lg w-[390px] h-[350px] bg-white px-9">
        <div className="flex items-center justify-between">
          <p className="mt-4 text-xl font-semibold">회원가입</p>
          <p className="mt-4 text-lg cursor-pointer" onClick={closeSignupModal}>
            X
          </p>
        </div>
        <input
          className="pl-5 mt-5 text-lg text-black bg-white border rounded-lg outline-none w-80 h-11"
          placeholder="example@email.com"
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
        />
        <input
          className="pl-5 mt-5 text-lg text-black bg-white border rounded-lg outline-none w-80 h-11"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="pl-5 mt-5 text-lg text-black bg-white border rounded-lg outline-none w-80 h-11"
          placeholder="Repeat Password"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <button className="mt-5 text-xl font-bold text-white border rounded-lg shadow-lg w-80 h-11 bg-hongsi" onClick={handleSignup}>
          가입하기
        </button>
        <div className="flex items-center justify-end ">
          <p className="mt-3 text-sm cursor-pointer text-hongsi hover:underline" onClick={openLoginModal}>
            로그인
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
