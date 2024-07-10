import Feat from '../../assets/images/Feat.png'

export default function MainSection3() {
  return (
    <div className="flex flex-col items-center justify-center mt-[360px] mb-60 bg-white">
      <p className="text-5xl">“ 알뜰살뜰은 상품이 있는 링크를 통해</p>
      <p className="mt-4 text-5xl">사용자에게 최저가 제품을 비교할 수 있는</p>
      <p className="mt-4 text-5xl"> 정보를 제공합니다. “</p>
      <div className="flex flex-col items-center justify-center mt-20">
        <img src={Feat} alt="Feat" />
      </div>
    </div>
  )
}
