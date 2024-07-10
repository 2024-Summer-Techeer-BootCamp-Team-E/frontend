import Arrow from '../../assets/images/Arrow.gif'
import Copy from '../../assets/images/Copy.png'
import Original from '../../assets/images/Original.png'
import LookUp from '../../assets/images/LookUp.gif'
import LowPrice from '../../assets/images/LowPrice.png'
import Click from '../../assets/images/Click.gif'
import Pay from '../../assets/images/Pay.png'
import PayCheck from '../../assets/images/PayCheck.png'

export default function MainSection2() {
  return (
    <div className="w-screen h-auto border shadow-md bg-mainBg rounded-b-3xl">
      <div className="mx-[250px]">
        <div className="flex items-center justify-center">
          <img src={Arrow} alt="Arrow" />
        </div>
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
        <div className="flex items-center justify-center gap-48 mt-96">
          <div>
            <p className="mt-20 text-4xl font-bold ">DIFFBOT을 통한 해당 웹의 상품 관련</p>
            <p className="text-4xl font-bold ">키워드 추출 및 데이터 분석</p>
            <p className="text-lightorange mt-0.5 text-2xl font-bold">Extract keywords related to products on the web and</p>
            <p className="text-2xl font-bold text-lightorange">analyze data through crawling.</p>
          </div>
          <div className=" relative w-[620px] h-[210px] z-0">
            <img src={Original} alt="Original" className="object-cover " />
            <img src={LookUp} alt="LookUp" className="absolute object-cover w-40 h-40 top-28 right-36 " />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[217px] mt-96">
          <div className="relative">
            <img src={LowPrice} alt="LowPrice" className="object-cover" />
            <img src={Click} alt="Click" className="absolute object-cover bottom-10 right-4 h-14 "></img>
          </div>
          <div>
            <p className="mt-20 text-4xl font-bold ">알리익스프레스를 통해 자신이 찾는</p>
            <p className="text-4xl font-bold ">최저가 제품 페이지로 이동</p>
            <p className="text-lightorange mt-0.5 text-2xl font-bold">Go to the link for the lowest price </p>
            <p className="text-2xl font-bold text-lightorange">product you found.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-48 my-96">
          <div>
            <p className="mt-20 text-4xl font-bold ">합리적인 소비 시작하기</p>
            <p className="text-lightorange mt-0.5 text-2xl font-bold">Start rational consumption.</p>
            <p className="text-2xl font-bold cursor-pointer text-orange hover:text-red-600" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Let's start
            </p>
          </div>
          <div className=" relative w-[620px] h-[210px]">
            <img src={Pay} alt="Pay" className="absolute object-cover " />
            <img src={PayCheck} alt="PayCheck" className="absolute object-cover w-40 h-40 top-28 right-60" />
          </div>
        </div>
      </div>
    </div>
  )
}
