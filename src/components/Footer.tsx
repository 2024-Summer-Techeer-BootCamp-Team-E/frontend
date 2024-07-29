import Glass from '../assets/images/Search.png'
import { useNavigate } from 'react-router-dom'
import { URLSearch } from '../hooks/URLSearch' // URLSearch의 경로에 맞게 수정

export default function Footer() {
  const navigate = useNavigate()

  const handleSubmit = (url: string) => {
    navigate('/searchres', { state: { data: url } })
    // 페이지 새로고침
    window.location.reload()
  }

  return (
    <div className="flex items-center justify-center w-full sm:justify-around min-h-20 bg-footer">
      <p className="text-white lg:text-2xl sm:block md:text-xl">Check the lowest price!</p>
      <div className="relative">
        <div className="relative flex-row items-center hidden px-4 bg-white border sm:flex w-72 lg:w-96 md:w-80 h-9 rounded-2xl">
          <URLSearch
            inputClassName="w-full h-full text-sm bg-transparent border-none outline-none lg:text-lg md:text-md text-black/40"
            onSubmit={handleSubmit}
            placeholder="www.example.com"
            value={''}
          />
          <button
            className="absolute flex items-center justify-center w-16 h-6 rounded-2xl right-2 bg-hongsi hover:bg-orange-600"
            onClick={() => handleSubmit((document.querySelector('input[type="text"]') as HTMLInputElement).value)}
          >
            <img src={Glass} alt="돋보기" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
