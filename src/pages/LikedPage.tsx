import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import axiosInstance from '../components/User/axiosInstance'
import { LikedHeader } from '../components/LikedPageComponents/LikedHeader'
import { SearchBar } from '../components/LikedPageComponents/SearchBar'
import { Category } from '../components/LikedPageComponents/Category'
import { ProductList } from '../components/LikedPageComponents/ProductList'
import { DoughnutChartSection } from '../components/LikedPageComponents/DoughnutChartSection'

export interface LikedProducts {
  id: number
  name: string
  link: string
  price: number
  delivery_charge: number
  image_url: string
  category_id: number
  origin_price: number
}

export default function LikedPage() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [menu, setMenu] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [categoryPage, setCategoryPage] = useState(1)
  const [data, setData] = useState<LikedProducts[]>([])
  const [allData, setAllData] = useState<LikedProducts[]>([])
  const [totalOriginalPrice, setTotalOriginalPrice] = useState(0)
  const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryTotals, setCategoryTotals] = useState<{
    [key: number]: { totalOriginalPrice: number; totalDiscountedPrice: number }
  }>({})
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  const token = localStorage.getItem('accessToken')

  const fetchData = useCallback(async () => {
    if (!token) {
      navigate('/')
      alert('로그인을 먼저 해주세요!')
      return
    }

    setIsLoading(true)
    try {
      const response = await axiosInstance.get('/api/v1/likes', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      const newData = response.data
      setTotalCount(newData.length)
      setHasMore(newData.length > 0)
      setAllData(newData)
      setData(newData.slice(0, 5))

      const totals: { [key: number]: { totalOriginalPrice: number; totalDiscountedPrice: number } } = {}
      newData.forEach((item: LikedProducts) => {
        if (!totals[item.category_id]) {
          totals[item.category_id] = { totalOriginalPrice: 0, totalDiscountedPrice: 0 }
        }
        totals[item.category_id].totalOriginalPrice += item.origin_price
        totals[item.category_id].totalDiscountedPrice += item.price
      })
      setCategoryTotals(totals)

      const totalOriginalPrice = newData.reduce((sum: any, item: any) => sum + item.origin_price, 0)
      const totalDiscountedPrice = newData.reduce((sum: any, item: any) => sum + item.price, 0)
      setTotalOriginalPrice(totalOriginalPrice)
      setTotalDiscountedPrice(totalDiscountedPrice)
    } catch (error) {
      console.error('Error:', error)
      setHasMore(false)
    } finally {
      setIsLoading(false)
    }
  }, [navigate, token])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const { ref } = useInView({
    threshold: 0.2,
    onChange: (inView) => {
      if (inView && hasMore && !isLoading) {
        setPage((prevPage) => prevPage + 1)
      }
    },
  })

  useEffect(() => {
    if ((page > 1 && selectedCategory === null) || (categoryPage > 1 && selectedCategory !== null)) {
      const startIndex = 5 + ((selectedCategory === null ? page : categoryPage) - 2) * 2
      const endIndex = startIndex + 2
      const nextData = (selectedCategory === null ? allData : allData.filter((product) => product.category_id === selectedCategory)).slice(startIndex, endIndex)
      setData((prevData) => [...prevData, ...nextData])
      setHasMore(nextData.length >= 2)
    }
  }, [page, categoryPage, selectedCategory, allData])

  const handleClickMenu = () => setMenu(!menu)

  const handleClickLogo = () => navigate('/')

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategory(categoryId)
    if (categoryId === null) {
      setData(allData.slice(0, 5))
      setPage(1)
      setTotalCount(allData.length)
      setHasMore(allData.length > 5)
    } else {
      const filtered = allData.filter((product) => product.category_id === categoryId)
      setData(filtered.slice(0, 5))
      setCategoryPage(1)
      setTotalCount(filtered.length)
      setHasMore(filtered.length > 5)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    const filteredData = allData.filter((product) => product.name.toLowerCase().includes(query))
    setData(filteredData.slice(0, 5))
    setPage(1)
    setCategoryPage(1)
    setTotalCount(filteredData.length)
    setHasMore(filteredData.length > 5)
  }

  const displayedData = data.filter((product) => product.name.toLowerCase().includes(searchQuery) && (selectedCategory === null || product.category_id === selectedCategory))

  const currentTotals = selectedCategory === null ? { totalOriginalPrice, totalDiscountedPrice } : categoryTotals[selectedCategory] || { totalOriginalPrice: 0, totalDiscountedPrice: 0 }

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center px-2">
        <LikedHeader menu={menu} handleClickMenu={handleClickMenu} handleClickLogo={handleClickLogo} />
        <div className="flex px-6 items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] bg-mainBg h-14">
          <span className="text-xl font-bold text-black sm:text-2xl">좋아요</span>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] px-4 text-base font-bold gap-2 mt-4">
          {isLoading && <p>Loading...</p>}
          <p>전체 {totalCount}개</p>
          <Category selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
        </div>
        <ProductList displayedData={displayedData} isLoading={isLoading} />
        <div>{hasMore && !isLoading && <div ref={ref} />}</div>
        <DoughnutChartSection totalCount={totalCount} currentTotals={currentTotals} />
      </div>
    </div>
  )
}
