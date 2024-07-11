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
      <div className="mx-48">
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
          <div className="text-5xl font-bold ">
            <p className="mt-[63px]">HOW TO</p>
            <p className="mt-2 ">USE THIS WEB</p>
          </div>

          <div className="flex items-center justify-center gap-48 mt-20">
            <div className="w-[620px] h-[210px]">
              <img src={Copy} alt="Copy" />
            </div>
            <div>
              <p className="text-4xl font-bold ">원하는 상품의 링크를 복사 붙여넣기</p>
              <p className="text-lightorange mt-0.5 text-2xl font-bold">Copy the link of the product from the original page </p>
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
          <div className="flex items-center justify-center gap-48 mt-96">
            <div>
              <p className="mt-20 text-4xl font-bold ">DIFFBOT을 통한 해당 웹의 상품 관련 키워드 추출 및 데이터 분석</p>
              <p className="text-lightorange mt-0.5 text-2xl font-bold">Extract keywords related to products on the web and analyze data through crawling.</p>
            </div>
            <div className="relative z-0 flex items-center justify-center">
              <img src={Original} alt="Original" className="object-cover "></img>
              <img src={LookUp} alt="LookUp" className="absolute object-cover w-36 h-36 top-16 right-24 " />
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
          <div className="flex items-center justify-center gap-[217px] mt-96">
            <div className="relative">
              <img src={LowPrice} alt="LowPrice" className="object-cover" />
              <img src={Click} alt="Click" className="absolute object-cover bottom-10 right-4 h-14 "></img>
            </div>
            <div>
              <p className="mt-20 text-4xl font-bold ">알리익스프레스를 통해 자신이 찾는 최저가 제품 페이지로 이동</p>
              <p className="text-lightorange mt-0.5 text-2xl font-bold ">Go to the link for the lowest price product you found.</p>
              <p className="text-2xl font-bold text-lightorange"></p>
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
          <div className="flex items-center justify-center gap-48 my-96">
            <div>
              <p className="mt-20 text-4xl font-bold ">합리적인 소비 시작하기</p>
              <p className="text-lightorange mt-0.5 text-2xl font-bold">Start rational consumption.</p>
              <p className="mb-2 text-xl font-bold cursor-pointer text-orange hover:text-red-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Let's start
              </p>
            </div>
            <div className="relative w-[620px] h-[210px]">
              <img src={Pay} alt="Pay" className="absolute object-cover " />
              <img src={PayCheck} alt="PayCheck" className="absolute object-cover w-40 h-40 top-28 right-60" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
