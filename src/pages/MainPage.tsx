import Header from '../components/Main/Header'
import MainSection1 from '../components/Main/MainSection1'
import MainSection2 from '../components/Main/MainSection2'
import MainSection3 from '../components/Main/MainSection3'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const MainPage = () => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    setToken(accessToken)
  }, [])

  return (
    <div>
      <Header token={token} />
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <Footer />
    </div>
  )
}
export default MainPage
