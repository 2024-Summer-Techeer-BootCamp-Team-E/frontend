import { motion } from 'framer-motion'
import Pay from '../../assets/images/Pay.png'
import Copy from '../../assets/images/Copy.png'
import Arrow from '../../assets/images/Arrow.gif'
import Click from '../../assets/images/Click.gif'
import LookUp from '../../assets/images/LookUp.gif'
import Original from '../../assets/images/Original.png'
import LowPrice from '../../assets/images/LowPrice.png'
import PayCheck from '../../assets/images/PayCheck.png'

export default function MainSection2() {
  return (
    <div className="w-screen h-auto border shadow-md bg-mainBg rounded-b-3xl">
      <div className="mx-12 lg:mx-48 md:mx-32">
        <div className="flex items-center justify-center">
          <img src={Arrow} alt="Arrow" className="w-28 h-28" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          <div className="text-xl font-bold lg:text-4xl md:text-2xl ">
            <p className="mt-16">HOW TO</p>
            <p className="mt-2 ">USE THIS WEB</p>
          </div>
          <div className="justify-between gap-12 mt-20 md:flex ">
            <div className="md:w-1/2">
              <img src={Copy} alt="Copy" />
            </div>
            <div className="mt-12 md:w-1/2 md:m-0">
              <p className="text-xl font-bold lg:text-3xl md:text-2xl ">원하는 상품의 링크를 복사 붙여넣기</p>
              <p className="text-lightorange mt-0.5 lg:text-2xl md:text-lg text-md font-bold">Copy the link of the product from the original page </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          <div className="flex flex-col justify-between gap-12 md:flex-row mt-96">
            <div className="order-2 md:order-1 md:w-1/2">
              <p className="text-xl font-bold lg:text-3xl md:text-2xl">DIFFBOT을 통한 해당 웹의 상품 관련 키워드 추출 및 데이터 분석</p>
              <p className="text-lightorange mt-0.5 lg:text-2xl md:text-lg text-md font-bold">Extract keywords related to products on the web and analyze data through crawling.</p>
            </div>
            <div className="relative z-0 order-1 md:order-2 md:w-1/2 md:m-0">
              <img src={Original} alt="Original" />
              <img src={LookUp} alt="LookUp" className="absolute top-0 lg:h-4/5 h-2/3 right-24" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          <div className="justify-between gap-12 md:flex mt-96">
            <div className="relative flex justify-center md:w-1/2 h-1/2">
              <img src={LowPrice} alt="LowPrice" className="lg:h-3/4 md:h-2/3 h-1/3" />
              <img src={Click} alt="Click" className="absolute bottom-32 h-14 " />
            </div>
            <div className="mt-12 md:mt-0 md:w-1/2 ">
              <p className="text-xl font-bold lg:text-3xl md:text-2xl">알리익스프레스를 통해 자신이 찾는 최저가 제품 페이지로 이동</p>
              <p className="text-lightorange mt-0.5 lg:text-2xl md:text-lg text-md font-bold ">Go to the link for the lowest price product you found.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          <div className="flex flex-col justify-between gap-12 md:flex my-96 md:flex-row">
            <div className="flex flex-col justify-center order-2 md:order-1 md:w-1/2">
              <p className="text-xl font-bold lg:text-3xl md:text-2xl">합리적인 소비 시작하기</p>
              <p className="text-lightorange mt-0.5 lg:text-2xl md:text-lg text-md font-bold">Start rational consumption.</p>
              <p
                className="mb-2 font-bold cursor-pointer lg:text-2xl md:text-lg text-md text-hongsi hover:text-red-600 hover:underline"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Let's start
              </p>
            </div>
            <div className="relative order-1 mt-12 md:mt-0 md:w-1/2 md:order-2">
              <img src={Pay} alt="Pay" />
              <img src={PayCheck} alt="PayCheck" className="absolute bottom-8 left-10 h-1/2 " />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
