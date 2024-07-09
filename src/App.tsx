import MainPage from './pages/MainPage'
import LikedPage from './pages/LikedPage'
import SearchResPage from './pages/SearchResPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/searchres" element={<SearchResPage />} />
        <Route path="/liked" element={<LikedPage />} />
      </Routes>
    </Router>
  )
}
export default App
