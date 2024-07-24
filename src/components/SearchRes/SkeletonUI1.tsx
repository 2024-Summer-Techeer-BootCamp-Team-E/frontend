import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonUI1 = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className="xl:h-60 xl:w-60 lg:w-[216px] lg:h-[216px] md:w-56 md:h-56 max-w-56 max-h-56" />
      <Skeleton className="xl:w-60 lg:w-[216px] md:w-56 max-w-56" />
      <Skeleton className="xl:w-60 lg:w-[216px] md:w-56 max-w-56" />
      <Skeleton className="xl:w-60 lg:w-[216px] md:w-56 max-w-56" />
    </div>
  )
}

export default SkeletonUI1
