import Liked from '../../assets/images/Liked.png'
import TestImg from '../../assets/images/SearchTest1.png'

export default function LikedProduct() {
  return (
    <div>
      <div className="w-full mt-2 border-t-4 border-mainBg" />
      <div className="flex items-center my-4 text-sm">
        <img src={TestImg} alt="image" className="w-28 h-28" />
        <div className="flex flex-col my-4 text-sm sm:flex-row">
          <p className="ml-2 font-semibold sm:ml-5 lg:w-96 md:w-64 sm:w-52 ">샤오미 미지아 스마트 DC 인버터 선풍기, 업그레이드 버전 </p>
          <p className="ml-2 lg:w-40 md:w-28 sm:w-20 text-black/50">
            <span className="sm:hidden">배송비: </span> ₩ 18000
          </p>
          <p className="ml-2 lg:w-28 md:w-20 sm:w-16 text-hongsi">₩ 2000</p>
          <div>
            <img src={Liked} alt="Liked" className="w-8 h-8 ml-2" />
          </div>
        </div>
      </div>
    </div>
  )
}
