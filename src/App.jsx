import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Whoweare from "./pages/Whoweare";
import OurTeam from "./pages/OurTeam";
import NewMedia from "./pages/NewMedia";
import ClientTestimonials from "./pages/ClientTestimonials";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetailPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoweare" element={<Whoweare />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/client-testimonial" element={<ClientTestimonials />} />
        <Route path="/insight/news&media" element={<NewMedia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />  
    </>
  );
}

export default App;
