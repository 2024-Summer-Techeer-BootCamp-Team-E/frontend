import { useState, useEffect, useRef } from 'react'
import Header from '../components/Main/Header'
import MainSection1 from '../components/Main/MainSection1'
import MainSection2 from '../components/Main/MainSection2'
import MainSection3 from '../components/Main/MainSection3'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const MainPage: React.FC = () => {
  const [token, setToken] = useState<string | null>(null)
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false)
  const mainSection1Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    setToken(accessToken)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (mainSection1Ref.current) {
        const section1Bottom = mainSection1Ref.current.getBoundingClientRect().bottom
        if (window.scrollY > section1Bottom) {
          setShowScrollToTop(true)
        } else {
          setShowScrollToTop(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <Header token={token} />
      <div ref={mainSection1Ref}>
        <MainSection1 />
      </div>
      <MainSection2 />
      <MainSection3 />
      <ScrollToTop show={showScrollToTop} />
      <Footer />
    </div>
  )
}

export default MainPage
