import { Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'

// COMPONENTS 
import NavBar from './components/NavBar'


function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={< Home />} />
        {/* <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/resume" element={< Resume />} />
        <Route path="/projectdetails" element={< ProjectDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
