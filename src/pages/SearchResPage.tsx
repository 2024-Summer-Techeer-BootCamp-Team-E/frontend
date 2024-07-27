import axios from 'axios'
import Footer from '../components/Footer'
import MenuBtn from '../components/MenuBtn'
import Skeleton from 'react-loading-skeleton'
import Glass from '../assets/images/Glass.png'
import 'react-loading-skeleton/dist/skeleton.css'
import useModalStore from '../store/useModalStore'
import LoginModal from '../components/User/LoginModal'
import HamburgerMenu from '../components/HamburgerMenu'
import SignupModal from '../components/User/SignupModal'
import OriginBtn from '../components/SearchRes/OriginBtn'
import ALiProducts from '../components/SearchRes/ALiProducts'
import SkeletonUI1 from '../components/SearchRes/SkeletonUI1'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLocation, useNavigate } from 'react-router-dom'
interface ALiState {
  name: string
  price: string
  delivery_charge: string
  search_url: string
  image_url: string
  category_id: number
  id: number
}
export default function SearchResPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const url = location.state.data
  const [page, setPage] = useState(1)
  const [skUi, setSkUi] = useState(true)
  const [emptyData, setEmptyData] = useState(false)
  const [menu, setMenu] = useState(false)
  const [ui, setUi] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [data, setData] = useState<ALiState[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const token = localStorage.getItem('accessToken')
  const [linkData, setLinkData] = useState<ALiState>({
    name: '',
    price: '',
    delivery_charge: '',
    search_url: '',
    image_url: '',
    category_id: 0,
    id: 0,
  })
  const { isLoginModalOpen, isSignupModalOpen } = useModalStore()
  const handleClickMenu = () => {
    setMenu(!menu)
  }
  const HandleClickLogo = () => {
    navigate('/')
  }
  const postKeyword = async () => {
    try {
      const response = await axios.post('/api/v1/products/keyword/', {
        search_url: url,
      })
      console.log(response.data.keyword)
    } catch (error) {
      alert('검색2에 실패하였습니다.')
      console.log('Error', error)
    }
  }

  const fetchAli = async (currentPage: number) => {
    setIsLoading(true)
    if (linkData.name && !emptyData) {
      try {
        const response = await axios.post('/api/v1/products/info/', {
          search_url: linkData.search_url,
        })
        setUi(true)
        if (response.data.length === 0) {
          setHasMore(false)
          console.log('검색 결과 없네')
          setEmptyData(true)
          return
        }
        const newData = response.data.map((item: ALiState, index: number) => ({
          ...item,
          id: index + currentPage * 1000,
        }))
        if (newData.length === 0) {
          setHasMore(false)
        } else {
          const paginatedData = newData.slice((currentPage - 1) * 4, currentPage * 4)
          if (paginatedData.length < 4) {
            setHasMore(false)
          }
          setData((prevData) => {
            const combinedData = [...prevData, ...paginatedData]
            const uniqueData = combinedData.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
            return uniqueData
          })
        }
      } catch (error) {
        alert('검색에 실패하였습니다.')
        console.error('Error:', error)
        setHasMore(false)
      } finally {
        setIsLoading(false)
      }
    }
  }
  const postScrape = async () => {
    try {
      const response = await axios.post('/api/v1/products/scrape/', {
        url,
      })
      setLinkData(response.data)
      setSkUi(false)
      await postKeyword()
    } catch (error) {
      console.log('Error', error)
    }
  }
  useEffect(() => {
    postScrape()
  }, [])
  useEffect(() => {
    fetchAli(page)
  }, [page, linkData])
  const { ref } = useInView({
    threshold: 0.2,
    onChange: (inView) => {
      if (inView && hasMore && !isLoading) {
        setPage((prevPage) => prevPage + 1)
      }
    },
  })
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col items-center gap-5 px-2">
        <div className="flex relative items-center justify-between px-6 bg-mainBg w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-14 mt-5">
          <span className="text-2xl font-bold cursor-pointer text-hongsi" onClick={HandleClickLogo}>
            알뜰살뜰
          </span>
          <div className="relative ">
            <input className="hidden md:block md:w-[300px] lg:w-[400px] xl:w-[500px] pl-8 bg-white border rounded-lg outline-none h-9 text-black/40" placeholder="www.example.com" />
            <img src={Glass} alt="돋보기" className="absolute w-5 h-5 left-2 top-2" />
          </div>
          <div onClick={handleClickMenu}>
            <HamburgerMenu />
          </div>
          {menu && (
            <div className="absolute z-10 border xl:-right-40 xl:top-2 top-20 border-black/5 right-5">
              <div className="z-0 absolute w-5 h-5 transform rotate-45 border border-black/3 -translate-x-1/2 shadow-xl bg-mainBg xl:top-2 xl:-left-[1px] -top-2 left-24 " />
              <div className="relative flex flex-col items-center justify-center w-32 gap-4 p-2 text-center shadow-xl h-44 bg-mainBg">
                <MenuBtn>메인페이지</MenuBtn>
                <MenuBtn>좋아요</MenuBtn>
                <MenuBtn>깃허브</MenuBtn>
                {token ? <MenuBtn>로그아웃</MenuBtn> : <MenuBtn>로그인</MenuBtn>}
                {isLoginModalOpen && <LoginModal />}
                {isSignupModalOpen && <SignupModal />}
              </div>
            </div>
          )}
        </div>
        <div className="w-full sm:pr-4 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] bg-mainBg h-64 flex justify-center items-center">
          <div className="flex items-center justify-center w-1/2">
            {skUi ? <Skeleton className="w-40 h-40 sm:w-52 sm:h-52" /> : <img src={linkData.image_url} className="w-40 h-40 sm:w-52 sm:h-52" />}
          </div>
          <div className="flex flex-col w-1/2 gap-5 p-4 font-semibold ">
            <p className="text-sm sm:text-base">{skUi ? <Skeleton className="text-sm sm:text-base" /> : linkData.name}</p>
            <p className="text-sm sm:text-base text-black/50">{skUi ? <Skeleton className="text-sm sm:text-base" /> : `Delivery : ₩${linkData.delivery_charge}`}</p>
            <p className="text-lg sm:text-2xl text-hongsi">{skUi ? <Skeleton className="text-sm sm:text-base" /> : `₩${linkData.price}`}</p>

            {skUi ? (
              <Skeleton className="text-sm sm:text-base" />
            ) : (
              <div className="flex justify-between">
                <OriginBtn link={linkData.search_url}>Share</OriginBtn>
                <OriginBtn link={linkData.search_url}>Visit Link</OriginBtn>
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] grid lg:grid-cols-4 grid-cols-3 gap-3 mb-10">
          {ui && !skUi ? (
            data.map((product: any) => <ALiProducts key={product.id} {...product} search_url={linkData.search_url} />)
          ) : (
            <>
              {Array.from({ length: 5 }).map((_, index) => (
                <SkeletonUI1 key={index} />
              ))}
            </>
          )}
        </div>
        {hasMore && !isLoading && <div ref={ref} />}
      </div>
      {emptyData && (
        <div className="flex flex-col items-center justify-center mt-20 text-bold">
          <p>검색 결과가 없습니다.</p>
          <div className="fixed bottom-0">
            <Footer />
          </div>
        </div>
      )}
      {!hasMore && !emptyData && <Footer />}
    </div>
  )
}
