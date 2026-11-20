import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Subjects from './pages/Subjects'
import About from './pages/About'
function NotFound() {
  return <main className="not-found"><h1>404</h1><p>Trang bạn tìm không tồn tại.</p><a href="/">Quay về trang chủ</a></main>
}
export default function App() {
  return <div className="app-shell">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/subjects" element={<Subjects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </div>
}
