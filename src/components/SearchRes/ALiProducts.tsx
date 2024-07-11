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
    <div className="flex flex-col gap-2 my-3 font-semibold w-60">
      <div className="relative">
        <img src={Test} className="h-60 w-60" />
        <div className="absolute top-3 right-2">
          {like ? <img src={Liked} alt="liked" onClick={handleClickLike} className="w-8 h-8" /> : <img src={Like} alt="like" onClick={handleClickLike} className="w-8 h-8" />}
          {/* 좋아요 누를때 효과나 알림 주면 좋을 듯 */}
        </div>
      </div>
      <p className="text-base">샤오미 미지아 스마트 DC 인버터 선풍기, 업그레이드 버전</p>
      <p className="text-xs text-black/50">Delivery : ₩ 2000</p>
      <p className="mt-2 text-lg text-hongsi">₩ 25000</p>
    </div>
  )
}
