import React from 'react'
import LikedProduct from './LikedProduct'
import { LikedProducts } from '../../pages/LikedPage'

interface ProductListProps {
  displayedData: LikedProducts[]
  isLoading: boolean
}

export function ProductList({ displayedData, isLoading }: ProductListProps) {
  return (
    <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-auto gap-4 border-[7px] border-mainBg p-5">
      <div className="flex font-bold">
        <p className="lg:w-[580px] w-[500px]">품목</p>
        <span className="hidden w-40 sm:block text-black/50">배송비</span>
        <span className="hidden w-40 sm:block text-hongsi">가격</span>
      </div>
      {isLoading && <p>Loading...</p>}
      {displayedData.map((product) => (
        <LikedProduct key={product.id} {...product} />
      ))}
    </div>
  )
}
