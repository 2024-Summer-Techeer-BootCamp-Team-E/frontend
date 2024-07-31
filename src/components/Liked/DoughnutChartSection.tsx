import React from 'react'
import DoughnutChat from './DoughnutChat'

interface DoughnutChartSectionProps {
  totalCount: number
  currentTotals: { totalOriginalPrice: number; totalDiscountedPrice: number }
}

export function DoughnutChartSection({ totalCount, currentTotals }: DoughnutChartSectionProps) {
  return (
    <>
      {totalCount > 0 && (
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] py-2 h-auto border-[7px] border-mainBg m-10">
          <p className="m-6 text-2xl font-bold text-center">총 할인율</p>
          <DoughnutChat totalOriginalPrice={currentTotals.totalOriginalPrice} totalDiscountedPrice={currentTotals.totalDiscountedPrice} />
        </div>
      )}
    </>
  )
}
