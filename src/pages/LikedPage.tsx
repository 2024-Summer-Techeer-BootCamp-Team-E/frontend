import axios, { AxiosResponse } from 'axios'
import Glass from '../assets/images/Glass.png'
import HamburgerMenu from '../components/HamburgerMenu'
import CategoryBtn from '../components/Liked/CategoryBtn'
import DoughnutChat from '../components/Liked/DoughnutChat'
import LikedProduct from '../components/Liked/LikedProduct'
import { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

interface LikedProducts {
  id: number
  name: string
  link: string
  price: string
  delivery_charge: string
  image_url: string
  category_id: number
}

export default function LikedPage() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [menu, setMenu] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<LikedProducts[]>([])
  const [allData, setAllData] = useState<LikedProducts[]>([]) // This will store all the fetched data

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

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem('accessToken')
      const response = await axios.get('/api/v1/likes', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      const newData = response.data
      console.log('데이터 : ', newData)
      if (newData.length === 0) {
        setHasMore(false)
      } else {
        setAllData(newData) // Store all the data
        setData(newData.slice(0, 5)) // Initially set the first 10 items
      }
    } catch (error) {
      console.error('Error:', error)
      setHasMore(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (page > 1) {
      const nextData = allData.slice((page - 1) * 2, page * 2)
      setData((prevData) => [...prevData, ...nextData])
      if (nextData.length < 2) {
        setHasMore(false)
      }
    }
  }, [page, allData])

  const { ref } = useInView({
    threshold: 1.0,
    onChange: (inView) => {
      if (inView && hasMore && !isLoading) {
        setPage((prevPage) => prevPage + 1)
      }
    },
  })

  const mutation = useMutation<AxiosResponse<LikedProducts>, Error, void>({
    mutationFn: postLike,
    onSuccess: () => {
      console.log('좋아요 성공')
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

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    navigate('/')
    window.location.reload()
    alert('로그아웃 성공')
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center px-2">
        <div className="flex px-6 relative items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-14 my-6 bg-mainBg">
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
                  메인페이지
                </button>
                <button className="hover:text-hongsi" onClick={handlePostDate}>
                  깃허브
                </button>
                <button className="hover:text-hongsi" onClick={logout}>
                  로그아웃
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex px-6 items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] bg-mainBg h-14">
          <span className="text-xl font-bold text-black sm:text-2xl">좋아요</span>
          <div className="relative">
            <input className="h-8 pl-8 text-sm bg-white border rounded-lg outline-none w-44 text-black/40" placeholder="검색" />
            <img src={Glass} alt="돋보기" className="absolute w-5 h-5 left-2 top-1.5" />
          </div>
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] px-4 text-base font-bold gap-2 mt-4">
          {isLoading && <p>Loading...</p>}
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
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-auto gap-4 border-[7px] border-mainBg p-5 ">
          <div className="flex font-bold">
            <p className="lg:w-[580px] w-[500px]">품목</p>
            <span className="hidden w-40 sm:block text-black/50">배송비</span>
            <span className="hidden w-40 sm:block text-hongsi">가격</span>
          </div>
          {isLoading && <p>Loading...</p>}
          {data && data.map((product: LikedProducts) => <LikedProduct key={product.id} {...product} />)}
        </div>
        <div>{hasMore && !isLoading && <div ref={ref} />}</div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] py-2 h-auto border-[7px] border-mainBg m-10">
          <p className="m-6 text-2xl font-bold text-center">총 할인율</p>
          <DoughnutChat />
        </div>
      </div>
    </div>
  )
}
