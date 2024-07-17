import axios from 'axios'
import useLikeP from '../../store/useLikeP'
import Like from '../../assets/images/Like.png'
import Liked from '../../assets/images/Liked.png'
import { useState } from 'react'

interface LikedProducts {
  id: number
  name: string
  link: string
  price: string
  delivery_charge: string
  image_url: string
  category_id: number
}

export default function LikedProduct({ id, name, price, link, delivery_charge, image_url, category_id }: LikedProducts) {
  const [like, setLike] = useState(true)
  const { likeP, updateLikeState } = useLikeP()
  const HandleClickLink = () => {
    window.open(link, '_blank')
  }
  const token = localStorage.getItem('accessToken')
  // const HandleClickLike = async () => {
  //   try {
  //     setLike(!like)
  //     const response = await axios.post(
  //       'http://localhost:8000/api/v1/likes/',
  //       {
  //         name,
  //         price,
  //         delivery_charge,
  //         link,
  //         image_url,
  //         category_id,
  //       },
  //       {
  //         headers: {
  //           accept: 'application/json',
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     )
  //     console.log(response.data)
  //     console.log(likeP)
  //     console.log('성공')
  //     alert('POST 성공!')
  //   } catch (error) {
  //     console.log('실패')
  //   }
  // }

  const HandleClickUnLike = async () => {
    try {
      setLike(!like)
      const response = await axios.delete('http://localhost:8000/api/v1/likes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id },
      })
      alert('좋아요 취소!')
    } catch (error) {
      console.log('실패')
    }
    try {
      const response = await axios.get('http://localhost:8000/api/v1/likes', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data)
      updateLikeState(response.data)
      console.log('Get 성공')
    } catch (error) {
      console.log('실패')
    }
  }
  return (
    <div>
      <div className="w-full mt-2 border-t-4 border-mainBg" />
      <div className="flex justify-between my-4 text-sm sm:justify-between">
        <img src={image_url} alt="image" className="cursor-pointer w-28 h-28" onClick={HandleClickLink} />
        <div className="flex flex-col my-4 text-sm sm:justify-between sm:flex-row">
          <p className="font-semibold cursor-pointer xl:w-[410px] lg:w-[410px] md:w-64 w-48" onClick={HandleClickLink}>
            {id}
            {name}
          </p>
          <p className="lg:w-40 md:w-28 sm:w-20 text-black/50">
            <span className="sm:hidden">배송비: </span> ₩{delivery_charge}
          </p>

          <p className=" lg:w-28 md:w-20 sm:w-16 text-hongsi">₩{price}</p>
        </div>
        <div className="w-8 h-8 my-2">{like ? <img src={Liked} alt="Liked" onClick={HandleClickUnLike} /> : <img src={Like} alt="Liked" />}</div>
      </div>
    </div>
  )
}
