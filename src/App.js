import { Routes, Route } from 'react-router-dom'
import "./App.css"

// PAGES
import Home from './pages/Home'

// COMPONENTS 
import Header from './components/Header'

function App() {
  return (
    <>
    <Header/>
      {/* <Routes>
        <Route path="/" element={< Home />} />
      </Routes> */}
    </>
  );
}

export default App;
