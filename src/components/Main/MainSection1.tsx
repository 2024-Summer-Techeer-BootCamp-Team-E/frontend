import axios from 'axios'
import Main from '../../assets/images/Main.png'
import Search from '../../assets/images/Search.png'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function MainSection1() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const handleClickSubmit = async () => {
    console.log('클릭')
    setLoading(!loading)
    try {
      const response = await axios.post('/api/v1/products/scrape/', {
        url,
      })
      console.log('링크: ', url)
      console.log(response.data)
      navigate('/searchres', { state: { data: response.data } })
    } catch (error) {
      console.log('Error', error)
    }
  }
  return (
    <div className="flex flex-col items-center gap-3 justify-center mt-20 w-screen h-[582px] " style={{ backgroundImage: `url(${Main})` }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
      >
        <div className="relative font-bold text-center">
          <p className="text-2xl sm:text-3xl bg-gradient-text bg-clip-text md:text-4xl lg:text-5xl text-hongsi">링크를 통한 최저가 검색 서비스</p>
        </div>
      </motion.div>
      <div className="relative z-0 flex items-center object-cover mt-12">
        <input
          type="text"
          className="lg:w-[600px] md:w-[500px] md:h-16 h-12 sm:w-[450px] xs:w-96 w-80 px-4 py-2 md:text-xl lg:text-xl rounded-2xl shadow-md focus:outline-none"
          placeholder="www.example.com"
          value={url}
          onChange={({ target: { value } }) => setUrl(value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClickSubmit()
            }
          }}
        />
        <button
          className="absolute flex items-center justify-center w-10 h-8 text-white shadow-md sm:w-12 sm:h-10 md:w-14 md:h-12 rounded-xl bg-hongsi hover:bg-orange-600 right-2 focus:outline-none "
          onClick={handleClickSubmit}
        >
          {loading ? (
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
                <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite" />
              </path>
            </svg>
          ) : (
            <img src={Search} alt="Search" className="w-6 h-6 lg:w-7 lg:h-7" />
          )}
        </button>
      </div>
    </div>
  )
}
