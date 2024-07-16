import { create } from 'zustand'

interface ModalState {
  isLoginModalOpen: boolean
  isSignupModalOpen: boolean

  openLoginModal: () => void
  closeLoginModal: () => void
  openSignupModal: () => void
  closeSignupModal: () => void
}

const useModalStore = create<ModalState>((set) => ({
  isLoginModalOpen: false,
  isSignupModalOpen: false,
  openLoginModal: () => set(() => ({ isLoginModalOpen: true, isSignupModalOpen: false })),
  closeLoginModal: () => set(() => ({ isLoginModalOpen: false })),
  openSignupModal: () => set(() => ({ isSignupModalOpen: true, isLoginModalOpen: false })),
  closeSignupModal: () => set(() => ({ isSignupModalOpen: false })),
}))

export default useModalStore
