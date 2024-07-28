import Glass from '../assets/images/Search.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const [url, setUrl] = useState('')
  const handleClickSubmit = () => {
    navigate('/searchres', { state: { data: url } })
  }
  return (
    <div className="flex items-center justify-center w-full sm:justify-around min-h-20 bg-footer">
      <p className="text-white lg:text-2xl sm:block md:text-xl">Check the lowest price!</p>
      <div className="relative">
        <div className="relative flex-row items-center hidden px-4 bg-white border sm:flex w-72 lg:w-96 md:w-80 h-9 rounded-2xl">
          <input
            className="w-full h-full text-sm bg-transparent border-none outline-none lg:text-lg md:text-md text-black/40"
            type="text"
            value={url}
            placeholder="www.example.com"
            onChange={({ target: { value } }) => setUrl(value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleClickSubmit()
              }
            }}
          />
          <button className="absolute flex items-center justify-center w-16 h-6 rounded-2xl right-2 bg-hongsi hover:bg-orange-600" onClick={handleClickSubmit}>
            <img src={Glass} alt="돋보기" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
