import MenuBtn from '../components/MenuBtn'
import Glass from '../assets/images/Glass.png'
import HamburgerMenu from '../components/HamburgerMenu'
import CategoryBtn from '../components/Liked/CategoryBtn'
import DoughnutChat from '../components/Liked/DoughnutChat'
import LikedProduct from '../components/Liked/LikedProduct'
import axiosInstance from '../components/User/axiosInstance'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
interface LikedProducts {
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
  const token = localStorage.getItem('accessToken')
  const [isLoading, setIsLoading] = useState(false)
  const [categoryPage, setCategoryPage] = useState(1)
  const [data, setData] = useState<LikedProducts[]>([])
  const [allData, setAllData] = useState<LikedProducts[]>([])
  const [totalOriginalPrice, setTotalOriginalPrice] = useState(0)
  const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0)
  const [searchQuery, setSearchQuery] = useState('') // New state for search query
  const [categoryTotals, setCategoryTotals] = useState<{ [key: number]: { totalOriginalPrice: number; totalDiscountedPrice: number } }>({})

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const fetchData = async () => {
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
      if (newData.length === 0) {
        setHasMore(false)
      } else {
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

        const totalOriginalPrice = newData.reduce((sum: number, item: any) => sum + item.origin_price, 0)
        const totalDiscountedPrice = newData.reduce((sum: number, item: any) => sum + item.price, 0)
        setTotalOriginalPrice(totalOriginalPrice)
        setTotalDiscountedPrice(totalDiscountedPrice)
      }
    } catch (error) {
      console.error('Error:', error)
      setHasMore(false)
    } finally {
      setIsLoading(false)
    }
  }
  const { ref } = useInView({
    threshold: 0.2,
    onChange: (inView) => {
      if (inView && hasMore && !isLoading) {
        setPage((prevPage) => prevPage + 1)
      }
    },
  })

  useEffect(() => {
    if (token) {
      fetchData()
    } else {
      navigate('/')
      alert('로그인을 먼저 해주세요!')
    }
  }, [])

  useEffect(() => {
    if ((page > 1 && selectedCategory === null) || (categoryPage > 1 && selectedCategory !== null)) {
      const startIndex = 5 + ((selectedCategory === null ? page : categoryPage) - 2) * 2
      const endIndex = startIndex + 2
      const nextData = (selectedCategory === null ? allData : allData.filter((product) => product.category_id === selectedCategory)).slice(startIndex, endIndex)
      setData((prevData) => [...prevData, ...nextData])
      if (nextData.length < 2) {
        setHasMore(false)
      }
    }
  }, [page, categoryPage, selectedCategory, allData])

  const handleClickMenu = () => {
    setMenu(!menu)
  }
  const handleClickLogo = () => {
    navigate('/')
  }
  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategory(categoryId)
    if (categoryId === null) {
      // 좋아요 전체
      setData(allData.slice(0, 5))
      setPage(1)
      setTotalCount(allData.length)
      setHasMore(true)
    } else {
      // 좋아요 카테고리
      const filtered = allData.filter((product) => product.category_id === categoryId)
      setData(filtered.slice(0, 5))
      setCategoryPage(1)
      setTotalCount(filtered.length) // 카테고리 안에  개수
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

  const displayedData =
    selectedCategory === null
      ? data.filter((product) => product.name.toLowerCase().includes(searchQuery))
      : data.filter((product) => product.category_id === selectedCategory && product.name.toLowerCase().includes(searchQuery))

  const currentTotals = selectedCategory === null ? { totalOriginalPrice, totalDiscountedPrice } : categoryTotals[selectedCategory] || { totalOriginalPrice: 0, totalDiscountedPrice: 0 }

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center px-2">
        <div className="flex px-6 relative items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-14 my-6 bg-mainBg">
          <span className="text-xl font-bold cursor-pointer sm:text-2xl text-hongsi" onClick={handleClickLogo}>
            알뜰살뜰
          </span>
          <div className="absolute right-3" onClick={handleClickMenu}>
            <HamburgerMenu />
          </div>
          {menu && (
            <div className="absolute z-10 border xl:-right-40 xl:top-3 top-16 border-black/5 right-1">
              <div className="z-0 absolute w-5 h-5 transform rotate-45 border border-black/3 -translate-x-1/2 shadow-xl bg-mainBg xl:top-2 xl:-left-[1px] -top-2 left-24 sm:left-24" />
              <div className="relative flex flex-col items-center justify-center w-32 gap-4 p-2 text-center shadow-xl h-36 bg-mainBg">
                <MenuBtn>메인페이지</MenuBtn>
                <MenuBtn>깃허브</MenuBtn>
                <MenuBtn>로그아웃</MenuBtn>
              </div>
            </div>
          )}
        </div>
        <div className="flex px-6 items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] bg-mainBg h-14">
          <span className="text-xl font-bold text-black sm:text-2xl">좋아요</span>
          <div className="relative">
            <input className="h-8 pl-8 text-sm bg-white border rounded-lg outline-none w-44 text-black/40" placeholder="검색" value={searchQuery} onChange={handleSearchChange} />
            <img src={Glass} alt="돋보기" className="absolute w-5 h-5 left-2 top-1.5" />
          </div>
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] px-4 text-base font-bold gap-2 mt-4">
          {isLoading && <p>Loading...</p>}
          <p>전체 {totalCount}개</p>
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
              오락
            </CategoryBtn>
            <CategoryBtn onClick={() => handleCategoryClick(6)} isSelected={selectedCategory === 6}>
              자동차
            </CategoryBtn>
            <CategoryBtn onClick={() => handleCategoryClick(7)} isSelected={selectedCategory === 7}>
              기타
            </CategoryBtn>
          </div>
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-auto gap-4 border-[7px] border-mainBg p-5 ">
          <div className="flex font-bold">
            <p className="lg:w-[580px] w-[500px]">품목</p>
            <span className="hidden w-40 sm:block text-black/50">배송비</span>
            <span className="hidden w-40 sm:block text-hongsi">가격</span>
          </div>
          {isLoading && <p>Loading...</p>}
          {displayedData && displayedData.map((product: LikedProducts) => <LikedProduct key={product.id} {...product} />)}
        </div>
        <div>{hasMore && !isLoading && <div ref={ref} />}</div>
        {totalCount !== 0 && (
          <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] py-2 h-auto border-[7px] border-mainBg m-10">
            <p className="m-6 text-2xl font-bold text-center">총 할인율</p>
            <DoughnutChat totalOriginalPrice={currentTotals.totalOriginalPrice} totalDiscountedPrice={currentTotals.totalDiscountedPrice} />
          </div>
        )}
      </div>
    </div>
  )
}
