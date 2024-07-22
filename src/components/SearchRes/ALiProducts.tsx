import Like from '../../assets/images/Like.png'
import Liked from '../../assets/images/Liked.png'
import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

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
  const queryClient = useQueryClient()
  const [pData, setPData] = useState<ALiState | null>(null)
  const token = localStorage.getItem('accessToken')
  const postData = async () => {
    const response = await axios.post<ALiState>(
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
      throw new Error('pData는 null이 아니다.')
    }
    return axios.delete('http://localhost:8000/api/v1/likes', {
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
      console.log('좋아요 성공')
      queryClient.invalidateQueries({
        queryKey: ['product'],
      })
      setPData(data)
      alert('좋아요 성공!')
    },
    onError: () => {
      console.error('에러 발생')
    },
  })

  const deleteMutation = useMutation<AxiosResponse<ALiState>, Error, void>({
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

  const handleClickPostDelete = () => {
    if (like) {
      deleteMutation.mutate()
    } else {
      postMutation.mutate()
    }
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
            <img src={Liked} alt="liked" onClick={handleClickPostDelete} className="w-6 h-6 sm:w-8 sm:h-8" />
          ) : (
            <img src={Like} alt="like" onClick={handleClickPostDelete} className="w-6 h-6 sm:w-8 sm:h-8" />
          )}
        </div>
      </div>
      <div className="w-full">
        <p className="text-xs sm:block text-black/50">Delivery : ₩ {delivery_charge}</p>
        <p className="mt-2 sm:text-lg text-md text-hongsi">₩ {price}</p>
      </div>
    </div>
  )
}
