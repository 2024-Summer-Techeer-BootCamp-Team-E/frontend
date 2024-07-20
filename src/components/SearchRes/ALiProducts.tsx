import Liked from '../../assets/images/Liked.png'
import Like from '../../assets/images/Like.png'
import { useState } from 'react'

interface ALiState {
  id: number
  product_name: string
  price: string
  delivery_charge: string
  link: string
  image_url: string
  category_id: number
}

export default function ALiProducts({ product_name, price, delivery_charge, link, image_url, category_id }: ALiState) {
  const [like, setLike] = useState(false)
  const handleClickLike = () => {
    setLike(!like)
  }
  const handleClickLink = () => {
    window.open(link, '_blank')
  }
  return (
    <div className="flex flex-col items-center justify-between gap-2 my-3 font-semibold xl:w-60 lg:w-[216px] md:w-56 w-full">
      <div className="relative flex flex-col items-center">
        <img src={image_url} className="xl:h-60 xl:w-60 lg:w-[216px] lg:h-[216px] md:w-56 md:h-56" onClick={handleClickLink} />
        <p className="text-xs sm:text-sm lg:text-base">{product_name}</p>
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
        <p className="text-xs sm:block text-black/50">Delivery : ₩ {delivery_charge}</p>
        <p className="mt-2 sm:text-lg text-md text-hongsi">₩ {price}</p>
      </div>
    </div>
  )
}
