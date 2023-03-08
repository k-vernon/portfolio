import "./App.css"

// COMPONENTS 
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Portfolio from "./components/Portfolio/Portfolio";


function App() {
  return (
    <>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Qualification />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
        
    </>
  );
}

export default App;
