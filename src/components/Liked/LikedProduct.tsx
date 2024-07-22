import axios, { AxiosResponse } from 'axios'
import Like from '../../assets/images/Like.png'
import Liked from '../../assets/images/Liked.png'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

interface LikedProducts {
  id: number
  name: string
  link: string
  price: number
  delivery_charge: number
  image_url: string
  category_id: number
}
export default function LikedProduct({ id, name, price, link, delivery_charge, image_url, category_id }: LikedProducts) {
  const queryClient = useQueryClient()
  const [like, setLike] = useState(true)
  const token = localStorage.getItem('accessToken')

  const handleClickLink = () => {
    window.open(link, '_blank')
  }

  const postLike = async (): Promise<AxiosResponse<LikedProducts>> => {
    const token = localStorage.getItem('accessToken')
    return axios.post(
      '/api/v1/likes/',
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
          Authorization: `Bearer ${token}`,
        },
      },
    )
  }

  useQuery({
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
  const postMutation = useMutation<AxiosResponse<LikedProducts>, Error, void>({
    mutationFn: postLike,
    onSuccess: () => {
      console.log('좋아요 성공')
      // 요청 성공 시 해당 queryKey 유효성 제거
      // queryClient.invalidateQueries({
      //   queryKey: ['product'],
      // })
    },
    onError: () => {
      console.error('에러 발생')
    },
  })
  const deleteLike = async (): Promise<AxiosResponse<LikedProducts>> => {
    return axios.delete('http://localhost:8000/api/v1/likes', {
      data: { id },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }

  const deleteMutation = useMutation<AxiosResponse<LikedProducts>, Error, void>({
    mutationFn: deleteLike,
    onSuccess: () => {
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
  const handlePostDate = () => {
    setLike(true)
    postMutation.mutate()
  }
  const handleDeleteDate = () => {
    setLike(false)
    deleteMutation.mutate()
  }

  return (
    <div>
      <div className="w-full mt-2 border-t-4 border-mainBg" />
      <div className="flex justify-between my-4 text-sm sm:justify-between">
        <img src={image_url} alt="image" className="cursor-pointer w-28 h-28" onClick={handleClickLink} />
        <div className="flex flex-col my-4 text-sm sm:justify-between sm:flex-row">
          <p className="font-semibold cursor-pointer xl:w-[410px] lg:w-[410px] md:w-64 w-48" onClick={handleClickLink}>
            {name}
          </p>
          <p className="lg:w-40 md:w-28 sm:w-20 text-black/50">
            <span className="sm:hidden">배송비: </span> ₩{delivery_charge}
          </p>
          <p className="lg:w-28 md:w-20 sm:w-16 text-hongsi">₩{price}</p>
        </div>
        <div className="w-8 h-8 my-2">{like ? <img src={Liked} alt="Liked" onClick={handleDeleteDate} /> : <img src={Like} alt="Like" onClick={handlePostDate} />}</div>
      </div>
    </div>
  )
}
