import Like from '../../assets/images/Like.png'
import Liked from '../../assets/images/Liked.png'
import { useEffect, useState } from 'react'
import axiosInstance, { AxiosResponse } from 'axios' // Import the custom axios instance
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import SkeletonUI1 from './SkeletonUI1'

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
  const queryClient = useQueryClient()
  const [like, setLike] = useState(false)
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem('accessToken')
  const [pData, setPData] = useState<ALiState | null>(null)

  const postData = async () => {
    const response = await axiosInstance.post<ALiState>(
      '/api/v1/likes/',
      {
        name: product_name,
        price,
        delivery_charge,
        link,
        image_url,
        category_id,
      },
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  }

  const deleteLike = async (): Promise<AxiosResponse<ALiState>> => {
    if (!pData || !pData.id) {
      throw new Error('에러 발생')
    }
    return axiosInstance.delete('/api/v1/likes/', {
      data: { id: pData.id },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }

  const postMutation = useMutation<ALiState, Error, void>({
    mutationFn: postData,
    onSuccess: (data) => {
      setLike(!like)
      console.log('좋아요 성공')
      queryClient.invalidateQueries({
        queryKey: ['product'],
      })
      setPData(data)
      alert('좋아요 성공!')
    },
    onError: () => {
      alert('로그인이 필요합니다!')
      console.error('에러 발생')
    },
  })

  const deleteMutation = useMutation<AxiosResponse<ALiState>, Error, void>({
    mutationFn: deleteLike,
    onSuccess: () => {
      setLike(!like)
      console.log('삭제 성공')
      queryClient.invalidateQueries({
        queryKey: ['product'],
      })
      alert('좋아요 취소!')
    },
    onError: () => {
      console.error('에러 발생')
    },
  })

  const handleClickPostDelete = () => {
    if (like) {
      deleteMutation.mutate()
    } else {
      postMutation.mutate()
    }
  }

  const handleClickLink = () => {
    window.open(link, '_blank')
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="flex flex-col items-center justify-between gap-2 my-3 font-semibold xl:w-60 lg:w-[216px] md:w-56 w-full">
      {loading ? (
        <SkeletonUI1 />
      ) : (
        <>
          <div className="relative flex flex-col items-center">
            <div className="bg-[#eaeaea] rounded-md flex items-center justify-center mb-2">
              {loading ? (
                <Skeleton className="xl:h-60 xl:w-60 lg:w-[216px] lg:h-[216px] md:w-56 md:h-56 max-w-56 max-h-56" />
              ) : (
                <img src={image_url} className="xl:h-60 xl:w-60 lg:w-[216px] lg:h-[216px] md:w-56 md:h-56" onClick={handleClickLink} />
              )}
            </div>
            <p className="text-xs sm:text-sm lg:text-base">{loading ? <Skeleton className="" /> : product_name}</p>
            <div className="absolute right-2 top-2 ">
              {like ? (
                <img src={Liked} alt="liked" onClick={handleClickPostDelete} className="w-6 h-6 sm:w-8 sm:h-8" />
              ) : (
                <img src={Like} alt="like" onClick={handleClickPostDelete} className="w-6 h-6 sm:w-8 sm:h-8" />
              )}
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs sm:block text-black/50">{loading ? <Skeleton className="" /> : `Delivery : ₩ ${delivery_charge}`}</p>
            <p className="mt-2 sm:text-lg text-md text-hongsi">{loading ? <Skeleton className="" /> : `₩ ${price}`}</p>
          </div>
        </>
      )}
    </div>
  )
}
