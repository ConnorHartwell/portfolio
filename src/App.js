import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import About from './pages/About.js'
import Blog from './pages/Blog.js'
import Navbar from './components/Navbar.js'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom"
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
