import React from 'react';
import Header from '../components/Main/Header';
import Main from '../assets/images/Main.png';
import Search from '../assets/images/Search.png'



export default function MainPage() {
  return (
    <div className='w-screen h-screen'>
      <Header /> {/* Header 컴포넌트를 사용 */}
    <div className="flex flex-col items-center gap-3 justify-center mt-20 h-[582px] w-screen" style={{ backgroundImage: `url(${Main})` }}>
      
      <div className="flex flex-col gap-4 text-5xl font-bold text-center text-orange ">
        <p className='text-transparent bg-gradient-text bg-clip-text'>Find the lowest price </p>
        <p className='pb-2 text-transparent bg-gradient-text bg-clip-text'> through web links </p>
      </div>
      <div className="relative z-10 flex items-center mt-12">
        <input
          type="text"
          className="w-[600px] h-[61px] px-4 py-2 text-xl rounded-2xl shadow-md focus:outline-none"
          placeholder="www.example.com"
        />
        <button className="absolute flex items-center justify-center h-12 text-white shadow-md rounded-2xl bg-orange right-2 w-14 focus:outline-none">
          <img src={Search} alt="Search"/>
        </button>
      </div>
  </div>
</div>
);
}


