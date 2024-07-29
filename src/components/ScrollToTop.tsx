import React from 'react'

interface ScrollToTopProps {
  show: boolean
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ show }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`fixed z-10 bottom-4 right-4 w-12 h-12 flex justify-center items-center transition-transform duration-300 transform rounded-full bg-hongsi hover:scale-105 ${show ? 'translate-y-0' : 'translate-y-20'}`}
      onClick={handleScrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      </svg>
    </button>
  )
}

export default ScrollToTop
