import './App.css'
import Navbar from './components/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import Whoweare from './pages/Whoweare'
import OurTeam from './pages/OurTeam'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/whoweare" element={<Whoweare/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/our-team" element={<OurTeam/>} />
    </Routes>
    <Footer/> 
    </>
  )
}

export default App
