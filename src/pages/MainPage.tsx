import React from 'react'
import Header from '../components/Main/Header'
import Main from '../assets/images/Main.png'
import Search from '../assets/images/Search.png'
import Arrow from '../assets/images/Arrow.gif'
import Copy from '../assets/images/Copy.png'
import LookUp from '../assets/images/LookUp.gif'
import Original from '../assets/images/Original.png'
import LowPrice from '../assets/images/LowPrice.png'
import Click from '../assets/images/Click.gif'
import Feat from '../assets/images/Feat.png'
import Footer from '../components/Footer'
import Pay from '../assets/images/Pay.png'
import PayCheck from '../assets/images/PayCheck.png'

export default function MainPage() {
  return (
    <div className="w-screen h-screen">
      <Header /> {/* Header 컴포넌트를 사용 */}
      <div className="flex flex-col items-center gap-3 justify-center mt-20 h-[582px] w-screen" style={{ backgroundImage: `url(${Main})` }}>
        <div className="flex flex-col gap-4 text-5xl font-bold text-center">
          <p className=" bg-gradient-text bg-clip-text text-hongsi">링크를 통한 최저가 검색 서비스</p>
        </div>
        <div className="relative z-0 flex items-center mt-12">
          <input type="text" className="w-[600px] h-[61px] px-4 py-2 text-xl rounded-2xl shadow-md focus:outline-none" placeholder="www.example.com" />
          <button className="absolute flex items-center justify-center h-12 text-white shadow-md rounded-2xl bg-hongsi right-2 w-14 focus:outline-none">
            <img src={Search} alt="Search" />
          </button>
        </div>
      </div>
      {/* 2페이지 */}
      <div className=" h-[2900px]  bg-mainBg border rounded-3xl shadow-md ">
        <div className="mx-[250px]">
          <div className="flex items-center justify-center">
            <img src={Arrow} alt="Arrow" />
          </div>
          <div className="text-5xl font-bold ">
            <p className="mt-[63px]">HOW TO</p>
            <p className="mt-2 ">USE THIS WEB</p>
          </div>
          <div className="flex items-center justify-between mt-20">
            <div className="w-[620px] h-[210px]">
              <img src={Copy} alt="Copy" />
            </div>
            <div>
              <p className="text-4xl font-bold ">원하는 상품의 링크를 복사 붙여넣기</p>
              <p className="text-lightorange mt-0.5 text-2xl font-bold">Copy the link of the product from the original page </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-96">
            <div>
              <p className="mt-20 text-4xl font-bold ">DIFFBOT을 통한 해당 웹의 상품 관련</p>
              <p className="text-4xl font-bold ">키워드 추출 및 데이터 분석</p>
              <p className="text-lightorange mt-0.5 text-2xl font-bold">Extract keywords related to products on the web and</p>
              <p className="text-2xl font-bold text-lightorange">analyze data through crawling.</p>
            </div>
            <div className=" relative w-[620px] h-[210px] z-0">
              <img src={Original} alt="Original" className="object-cover " />
              <img src={LookUp} alt="LookUp" className="absolute object-cover w-40 h-40 top-28 right-36 " />
              {/* gif 파일이 150*150이 최대 크기... */}
            </div>
          </div>
          <div className="flex items-center justify-between px-32 mt-96">
            <img src={LowPrice} alt="LowPrice" className="object-cover abolute" />
            <img src={Click} alt="Click" className="absolute object-cover ml-40 mt-60 w-14 h-14"></img>
            <div>
              <p className="mt-20 text-4xl font-bold ">알리익스프레스를 통해 자신이 찾는</p>
              <p className="text-4xl font-bold ">최저가 제품 페이지로 이동</p>
              <p className="text-lightorange mt-0.5 text-2xl font-bold">Go to the link for the lowest price </p>
              <p className="text-2xl font-bold text-lightorange">product you found.</p>
            </div>
          </div>
          <div className="relative flex items-center justify-between mt-96">
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
      <div className="flex flex-col items-center justify-center mt-[360px] mb-60 bg-white">
        <p className="text-5xl">“ 알뜰살뜰은 상품이 있는 링크를 통해</p>
        <p className="mt-4 text-5xl">사용자에게 최저가 제품을 비교할 수 있는</p>
        <p className="mt-4 text-5xl"> 정보를 제공합니다. “</p>
        <div className="flex flex-col items-center justify-center mt-20">
          <img src={Feat} alt="Feat" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
