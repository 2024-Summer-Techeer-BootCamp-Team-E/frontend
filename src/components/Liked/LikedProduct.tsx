import axios from 'axios'
import Liked from '../../assets/images/Liked.png'
import useLikeP from '../../store/useLikeP'

interface LikedProducts {
  id: number
  name: string
  link: string
  price: string
  delivery_charge: string
  image_url: string
  category_id: number
}

export default function LikedProduct({ id, name, price, link, delivery_charge, image_url }: LikedProducts) {
  const { updateLikeState } = useLikeP()
  const HandleClickLink = () => {
    window.open(link, '_blank')
  }

  const TOKEN =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxMTI0OTMzLCJpYXQiOjE3MjExMDMzMzMsImp0aSI6IjEyODIyOTA1N2NlODQ5OGJhNGNmMTkyMmE5YTlkNjM3IiwidXNlcl9pZCI6MX0.6rw4-4u0pMoNtjjFjqfSealI3fLi5Dr4xMUOAFCaWhk'
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
  const HandleClickUnLike = async () => {
    try {
      const response = await axios.delete('http://localhost:8000/api/v1/likes', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxMTI0OTMzLCJpYXQiOjE3MjExMDMzMzMsImp0aSI6IjEyODIyOTA1N2NlODQ5OGJhNGNmMTkyMmE5YTlkNjM3IiwidXNlcl9pZCI6MX0.6rw4-4u0pMoNtjjFjqfSealI3fLi5Dr4xMUOAFCaWhk',
        },
        data: { id },
      })
      console.log(response.data)
      alert('DELETE 성공!')
      GetLikes()
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
            {name}
          </p>
          <p className="lg:w-40 md:w-28 sm:w-20 text-black/50">
            <span className="sm:hidden">배송비: </span> ₩{delivery_charge}
          </p>

          <p className=" lg:w-28 md:w-20 sm:w-16 text-hongsi">₩{price}</p>
        </div>
        <div className="w-8 h-8 my-2">
          <img src={Liked} alt="Liked" className="" onClick={HandleClickUnLike} />
        </div>
      </div>
    </div>
  )
}
