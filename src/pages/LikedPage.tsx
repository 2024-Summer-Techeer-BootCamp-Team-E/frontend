import axios, { AxiosResponse } from 'axios'
import Glass from '../assets/images/Glass.png'
import HamburgerMenu from '../components/HamburgerMenu'
import CategoryBtn from '../components/Liked/CategoryBtn'
import DoughnutChat from '../components/Liked/DoughnutChat'
import LikedProduct from '../components/Liked/LikedProduct'
import { useState } from 'react'
import { faker } from '@faker-js/faker'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

interface LikedProducts {
  id: number
  name: string
  link: string
  price: string
  delivery_charge: string
  image_url: string
  category_id: number
}
const postLike = async (): Promise<AxiosResponse<LikedProducts>> => {
  const token = localStorage.getItem('accessToken')
  return axios.post(
    '/api/v1/likes/',
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      delivery_charge: faker.commerce.price(),
      link: faker.internet.url(),
      image_url: faker.image.url(),
      category_id: 7,
    },
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
}

export default function LikedPage() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [menu, setMenu] = useState(false)

  const token = localStorage.getItem('accessToken')
  const { isPending, error, data } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const response = await fetch('/api/v1/likes', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })
  const mutation = useMutation<AxiosResponse<LikedProducts>, Error, void>({
    mutationFn: postLike,
    onSuccess: () => {
      console.log('좋아요 성공')
      // 요청 성공 시 해당 queryKey 유효성 제거
      queryClient.invalidateQueries({
        queryKey: ['product'],
      })
    },
    onError: () => {
      console.error('에러 발생')
    },
  })

  const handleClickMenu = () => {
    setMenu(!menu)
  }
  const handleClickLogo = () => {
    navigate('/')
  }
  const handlePostDate = () => {
    mutation.mutate()
  }
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center px-2">
        <div className="flex px-6 relative items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem]  h-14 my-6 bg-mainBg">
          <span className="text-xl font-bold cursor-pointer sm:text-2xl text-hongsi" onClick={handleClickLogo}>
            알뜰살뜰
          </span>
          <div className="absolute right-3" onClick={handleClickMenu}>
            <HamburgerMenu />
          </div>
          {menu && (
            <div className="absolute z-10 border xl:-right-40 xl:top-3 top-16 border-black/5 right-1">
              <div className="z-0 absolute w-5 h-5 transform rotate-45 border border-black/3 -translate-x-1/2 shadow-xl bg-mainBg xl:top-2 xl:-left-[1px] -top-2 left-24 sm:left-24" />
              <div className="relative flex flex-col items-center justify-center w-32 gap-4 p-2 text-center shadow-xl h-36 bg-mainBg">
                <button className="hover:text-hongsi" onClick={handleClickLogo}>
                  Home
                </button>
                <button className="hover:text-hongsi" onClick={handlePostDate}>
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
          {isPending && <p>Loading...</p>}
          {data && <p>전체 {data.length}개</p>}
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
          {isPending && <p>Loading...</p>}
          {error && <p>데이터를 불러오지 못하였습니다...</p>}
          {data && data.map((product: LikedProducts) => <LikedProduct key={product.id} {...product} />)}
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] py-2 h-auto border-[7px] border-mainBg m-10">
          <p className="m-6 text-2xl font-bold text-center">총 할인율</p>
          <DoughnutChat />
        </div>
      </div>
    </div>
  )
}
