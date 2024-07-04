import { useLinkClickHandler } from "react-router-dom";
import Like from "../../assets/images/Like.png"

  // Header 컴포넌트 정의
export default function Header() {
  return (
    
    <header className="fixed top-0 left-0 flex items-center justify-between w-screen h-20 p-4 px-10 bg-white ">
      <div className="text-2xl font-bold cursor-pointer text-orange">AL-DDeul</div>
      <div className="flex items-center gap-5">
        <img src={Like} alt="Like" className="w-8 h-8"/>
        
        <button className="w-20 h-10 font-semibold bg-white border border-gray-300 rounded-lg">Sign In</button>
        <button className="w-20 h-10 font-semibold text-white rounded-lg bg-orange">Sign Up</button>
      </div>
    </header>
  );
}


