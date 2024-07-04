import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SearchResPage from './pages/SearchResPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/searchres" element={<SearchResPage />} />
      </Routes>
    </Router>
  )
}
export default App
