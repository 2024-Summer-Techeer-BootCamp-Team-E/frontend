import React from 'react'
import CategoryBtn from './CategoryBtn'

interface CategoryButtonsProps {
  selectedCategory: number | null
  handleCategoryClick: (categoryId: number | null) => void
}

export function Category({ selectedCategory, handleCategoryClick }: CategoryButtonsProps) {
  return (
    <div className="flex gap-3 my-4 sm:gap-6">
      <CategoryBtn onClick={() => handleCategoryClick(null)} isSelected={selectedCategory === null}>
        전체
      </CategoryBtn>
      <CategoryBtn onClick={() => handleCategoryClick(1)} isSelected={selectedCategory === 1}>
        의류
      </CategoryBtn>
      <CategoryBtn onClick={() => handleCategoryClick(2)} isSelected={selectedCategory === 2}>
        가정
      </CategoryBtn>
      <CategoryBtn onClick={() => handleCategoryClick(3)} isSelected={selectedCategory === 3}>
        전자
      </CategoryBtn>
      <CategoryBtn onClick={() => handleCategoryClick(4)} isSelected={selectedCategory === 4}>
        뷰티
      </CategoryBtn>
      <CategoryBtn onClick={() => handleCategoryClick(5)} isSelected={selectedCategory === 5}>
        스포츠
      </CategoryBtn>
      <CategoryBtn onClick={() => handleCategoryClick(6)} isSelected={selectedCategory === 6}>
        자동차
      </CategoryBtn>
      <CategoryBtn onClick={() => handleCategoryClick(7)} isSelected={selectedCategory === 7}>
        기타
      </CategoryBtn>
    </div>
  )
}
