import { create } from 'zustand'

interface LikedProducts {
  id: number
  name: string
  link: string
  price: string
  delivery_charge: string
  image_url: string
  category_id: number
}

interface LikeState {
  likeP: LikedProducts[]
  updateLikeState: (newLikedProps: LikedProducts[]) => void
}

const useLikeP = create<LikeState>((set) => ({
  likeP: [],
  updateLikeState: (newLikedProps: LikedProducts[]) =>
    set({
      likeP: newLikedProps,
    }),
}))

export default useLikeP
