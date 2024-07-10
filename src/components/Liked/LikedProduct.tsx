import Liked from '../../assets/images/Liked.png'
import TestImg from '../../assets/images/SearchTest1.png'

export default function LikedProduct() {
  return (
    <div>
      <div className="w-full mt-2 border-t-4 border-mainBg" />
      <div className="flex my-4 text-sm">
        <img src={TestImg} alt="image" className="w-28 h-28" />
        <p className="ml-5 mr-8 font-semibold w-96">디즈니 Mcqueens 픽사 만화 솔리드 방수 슬리퍼, 야외 샌드 샌들, </p>
        <p className="w-40 text-black/50">₩ 2500</p>
        <p className="w-40 text-orange">₩ 1000</p>
        <div>
          <img src={Liked} alt="Liked" className="w-8 h-8" />
        </div>
      </div>
    </div>
  )
}
