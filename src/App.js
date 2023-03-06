import "./App.css"

// COMPONENTS 
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
