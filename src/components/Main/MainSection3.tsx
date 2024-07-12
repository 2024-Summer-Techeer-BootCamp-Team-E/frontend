import Feat from '../../assets/images/Feat.png'

export default function MainSection3() {
  return (
    <div className="flex flex-col items-center justify-center bg-white sm:text-2xl lg:text-5xl md:text-4xl md:mt-96 mt-52 mb-60">
      <p>“ 알뜰살뜰은 상품이 있는 링크를 통해</p>
      <p className="my-4">사용자에게 최저가 제품을 비교할 수 있는</p>
      <p> 정보를 제공합니다. “</p>
      <div className="flex flex-col items-center justify-center mt-20">
        <img src={Feat} alt="Feat" className="w-2/3 md:w-4/5 lg:w-full" />
      </div>
    </div>
  )
}
