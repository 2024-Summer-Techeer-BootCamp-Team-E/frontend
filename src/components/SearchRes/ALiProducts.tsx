import Test from '../../assets/images/SearchTest1.png'
import Liked from '../../assets/images/Liked.png'
import Like from '../../assets/images/Like.png'
import { useState } from 'react'

export default function ALiProducts() {
  const [like, setLike] = useState(false)
  const handleClickLike = () => {
    setLike(!like)
  }
  return (
    <div className="flex flex-col items-center gap-2 my-3 font-semibold xl:w-60 lg:w-[216px] md:w-56 w-full">
      <div className="relative flex flex-col items-center">
        <img src={Test} className="xl:h-60 xl:w-60 lg:w-[216px] lg:h-[216px] md:w-56 md:h-56" />
        <div className="absolute right-2 top-2 ">
          {like ? (
            <img src={Liked} alt="liked" onClick={handleClickLike} className="w-6 h-6 sm:w-8 sm:h-8" />
          ) : (
            <img src={Like} alt="like" onClick={handleClickLike} className="w-6 h-6 sm:w-8 sm:h-8" />
          )}
          {/* 좋아요 누를때 효과나 알림 주면 좋을 듯 */}
        </div>
      </div>
      <div className="w-full">
        <p className="text-xs sm:text-sm lg:text-base">샤오미 미지아 스마트 DC 인버터 선풍기, 업그레이드 버전</p>
        <p className="text-xs sm:block text-black/50">Delivery : ₩ 2000</p>
        <p className="mt-2 sm:text-lg text-md text-hongsi">₩ 25000</p>
      </div>
    </div>
  )
}
