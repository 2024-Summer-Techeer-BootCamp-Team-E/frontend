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
      className={`fixed z-10 bottom-4 right-4 w-12 h-12 font-bold text-white transition-transform duration-300 transform rounded-full bg-hongsi hover:scale-105 ${show ? 'translate-y-0' : 'translate-y-20'}`}
      onClick={handleScrollToTop}
    >
      ^
    </button>
  )
}

export default ScrollToTop
