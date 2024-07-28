import Main from '../../assets/images/Main.png'
import Search from '../../assets/images/Search.png'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function MainSection1() {
  const navigate = useNavigate()
  const [url, setUrl] = useState('')
  const handleClickSubmit = () => {
    navigate('/searchres', { state: { data: url } })
  }
  return (
    <div className="flex flex-col items-center gap-3 justify-center mt-20 w-full h-[582px] " style={{ backgroundImage: `url(${Main})` }}>
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
          <img src={Search} alt="Search" className="w-6 h-6 lg:w-7 lg:h-7" />
        </button>
      </div>
    </div>
  )
}
