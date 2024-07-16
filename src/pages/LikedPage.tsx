import axios from 'axios'
import useLikeP from '../store/useLikeP'
import Glass from '../assets/images/Glass.png'
import HamburgerMenu from '../components/HamburgerMenu'
import CategoryBtn from '../components/Liked/CategoryBtn'
import DoughnutChat from '../components/Liked/DoughnutChat'
import LikedProduct from '../components/Liked/LikedProduct'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LikedPage() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  const { likeP, updateLikeState } = useLikeP()

  const HandleClickMenu = () => {
    setMenu(!menu)
  }

  const HandleClickLogo = () => {
    navigate('/')
  }
  const TOKEN =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxMTUwODIwLCJpYXQiOjE3MjExMjkyMjAsImp0aSI6IjdiMjVjODg0ZmM2MTQyYWRhMTA4NjU5OGVhYWQ5ZmZkIiwidXNlcl9pZCI6MX0.y3jMCTlaQL3ycSNTkipvbsnCBd7VnWzP2oRS86Fcbz4'
  const name = '나이키 에어 줌 알파플라이 넥스트% 3 블루프린트'
  const price = '320000'
  const delivery_charge = '2000'
  const link = 'https://kream.co.kr/products/307550?fetchRelated=true'
  const image_url = 'https://static.shoeprize.com/Raffle/thumb/HF7357-900-shoeprize-NIKE-AIR-ZOOM-ALPHAFLY-3-BLUE-PRINT-415465-1719305582107.jpg'
  const category_id = 7

  const GetLikes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/likes', {
        headers: {
          accept: 'application/json',
          Authorization: TOKEN,
        },
      })
      console.log(response.data)
      updateLikeState(response.data)
      console.log('Get 성공')
    } catch (error) {
      console.log('실패')
    }
  }

  const HandleClickLike = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/likes/',
        {
          name,
          price,
          delivery_charge,
          link,
          image_url,
          category_id,
        },
        {
          headers: {
            accept: 'application/json',
            Authorization: TOKEN,
          },
        },
      )
      console.log(response.data)
      console.log('성공')
      alert('POST 성공!')
      GetLikes() // POST 요청 성공 후 GET 요청 호출 (좋아요 내역 최신화)
    } catch (error) {
      console.log('실패')
    }
  }

  useEffect(() => {
    GetLikes()
  }, [])

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center px-2">
        <div className="flex px-6 relative items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem]  h-14 my-6 bg-mainBg">
          <span className="text-xl font-bold cursor-pointer sm:text-2xl text-hongsi" onClick={HandleClickLogo}>
            알뜰살뜰
          </span>
          <div className="absolute right-3" onClick={HandleClickMenu}>
            <HamburgerMenu />
          </div>
          {menu && (
            <div className="absolute z-10 border xl:-right-40 xl:top-3 top-16 border-black/5 right-1">
              <div className="z-0 absolute w-5 h-5 transform rotate-45 border border-black/3 -translate-x-1/2 shadow-xl bg-mainBg xl:top-2 xl:-left-[1px] -top-2 left-24 sm:left-24" />
              <div className="relative flex flex-col items-center justify-center w-32 gap-4 p-2 text-center shadow-xl h-36 bg-mainBg">
                <button className="hover:text-hongsi" onClick={HandleClickLogo}>
                  Home
                </button>
                <button className="hover:text-hongsi" onClick={HandleClickLike}>
                  {/* 임시로 post 버튼을 만듦 */}
                  Github
                </button>
                <button className="hover:text-hongsi">Sign out</button>
              </div>
            </div>
          )}
        </div>

        <div className="flex px-6 items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem]  bg-mainBg h-14">
          <span className="text-xl font-bold text-black sm:text-2xl">좋아요</span>
          <div className="relative">
            <input className="h-8 pl-8 text-sm bg-white border rounded-lg outline-none w-44 text-black/40" placeholder="검색" />
            <img src={Glass} alt="돋보기" className="absolute w-5 h-5 left-2 top-1.5" />
          </div>
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem]  px-4 text-base font-bold gap-2 mt-4">
          <p>전체 {likeP.length}개</p>
          <div className="flex gap-3 my-4 sm:gap-6">
            <CategoryBtn>전체</CategoryBtn>
            <CategoryBtn>의류</CategoryBtn>
            <CategoryBtn>스포츠</CategoryBtn>
            <CategoryBtn>생활 용품</CategoryBtn>
            <CategoryBtn>가전</CategoryBtn>
            <CategoryBtn>가구</CategoryBtn>
            <CategoryBtn>음식</CategoryBtn>
          </div>
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem]  h-auto gap-4 border-[7px] border-mainBg p-5 ">
          <div className="flex font-bold">
            <p className="lg:w-[580px] w-[500px]">품목</p>
            <span className="hidden w-40 sm:block text-black/50">배송비</span>
            <span className="hidden w-40 sm:block text-hongsi">가격</span>
          </div>
          {likeP.map((product) => (
            <LikedProduct key={product.id} {...product} />
          ))}
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] py-2 h-auto border-[7px] border-mainBg m-10">
          <p className="m-6 text-2xl font-bold text-center">총 할인율</p>
          <DoughnutChat />
        </div>
      </div>
    </div>
  )
}
