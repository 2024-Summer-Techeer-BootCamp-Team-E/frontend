import React from 'react'

interface SignupModalProps {
  closeSignupModal: () => void
  openLoginModal: () => void
}

const SignupModal = ({ closeSignupModal, openLoginModal }: SignupModalProps) => {
  return (
    <div className="fixed top-0 z-20 flex items-center justify-center w-screen h-screen snap-none bg-black/30 backdrop-blur-[2px]">
      <div className="rounded-2xl shadow-lg w-[390px] h-[350px] bg-white px-9">
        <div className="flex items-center justify-between">
          <p className="mt-4 text-xl font-semibold">회원가입</p>
          <p className="text-lg cursor-pointer" onClick={closeSignupModal}>
            X
          </p>
        </div>
        <input className="pl-5 mt-5 text-lg text-black bg-white border rounded-lg outline-none w-80 h-11" placeholder="example@email.com" />
        <input className="pl-5 mt-5 text-lg text-black bg-white border rounded-lg outline-none w-80 h-11" placeholder="Password" type="password" />
        <input className="pl-5 mt-5 text-lg text-black bg-white border rounded-lg outline-none w-80 h-11" placeholder="Repeat Password" type="password" />
        <button className="mt-5 text-xl font-bold text-white border rounded-lg shadow-lg w-80 h-11 bg-hongsi">가입하기</button>
        <div className="flex items-center justify-end mt-3">
          <p className="text-sm cursor-pointer text-hongsi" onClick={openLoginModal}>
            로그인
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
