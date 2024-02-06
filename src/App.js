import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import About from './pages/About.js'
import Blog from './pages/Blog.js'
import Navbar from './components/Navbar.js'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom"
function App() {
  const location = useLocation();
  return (
    <div className="app-container">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
