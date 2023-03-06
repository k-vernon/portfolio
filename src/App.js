import { Routes, Route } from 'react-router-dom'
import "./App.css"

// PAGES


// COMPONENTS 
import Header from './components/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
    </main>
      {/* <Routes>
        <Route path="/" element={< Home />} />
      </Routes> */}
    </>
  );
}

export default App;
