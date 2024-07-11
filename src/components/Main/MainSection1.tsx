import { motion } from 'framer-motion'
import Main from '../../assets/images/Main.png'
import Search from '../../assets/images/Search.png'

export default function MainSection1() {
  return (
    <div className="flex flex-col items-center gap-3 justify-center mt-20 w-screen h-[582px]  " style={{ backgroundImage: `url(${Main})` }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
      >
        <div className="relative text-5xl font-bold text-center">
          <p className="object-cover bg-gradient-text bg-clip-text text-hongsi">링크를 통한 최저가 검색 서비스</p>
        </div>
      </motion.div>
      <div className="relative z-0 flex items-center object-cover mt-12">
        <input type="text" className="w-[600px] h-[61px] px-4 py-2 text-xl rounded-2xl shadow-md focus:outline-none" placeholder="www.example.com" />
        <button className="absolute flex items-center justify-center h-12 text-white shadow-md rounded-2xl bg-hongsi right-2 w-14 focus:outline-none">
          <img src={Search} alt="Search" />
        </button>
      </div>
    </div>
  )
}
