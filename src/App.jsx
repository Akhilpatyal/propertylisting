import './App.css'
import Navbar from './components/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Blog from './pages/Blog'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
    </Routes>
    <Footer/> 
    </>
  )
}

export default App
