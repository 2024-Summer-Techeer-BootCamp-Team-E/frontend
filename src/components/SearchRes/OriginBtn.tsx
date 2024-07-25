interface BtnProps {
  children: string
  link: string
}

const OriginBtn = ({ children, link }: BtnProps) => {
  const handleClick = () => {
    if (children === 'Share') {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          alert('링크가 클립보드에 복사되었습니다.')
        })
        .catch((err) => {
          console.error('클립보드 복사 실패: ', err)
        })
    } else if (children === 'Visit Link') {
      window.open(link, '_blank')
    }
  }
  return (
    <a
      className="relative flex items-center px-4 py-1 pl-2 overflow-hidden font-medium border-2 cursor-pointer rounded-xl sm:px-5 sm:pl-5 md:pl-6 md:px-12 lg:px-16 text-hongsi border-hongsi hover:text-white group hover:bg-gray-50 whitespace-nowrap"
      onClick={handleClick}
    >
      <span className="absolute left-0 block w-full h-0 transition-all opacity-100 bg-hongsi group-hover:h-full top-1/2 group-hover:top-0 duration-400"></span>
      <span className="absolute right-0 flex items-center justify-start w-3 h-3 duration-300 transform translate-x-full md:w-6 md:h-6 sm:w-4 sm:h-4 group-hover:translate-x-0 ease">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="relative text-xs md:text-xs lg:text-sm">{children}</span>
    </a>
  )
}

export default OriginBtn
