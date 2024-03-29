import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './portfolioPage.css'

//COMPONENTS
import Header from '../Header'
import Footer from '../Footer/Footer'
import List from './List'
import Items from './Items'
import projects from './ProjectData'


const allNavList = [ 
  'all',
 ...new Set(projects.map((project) => project.category))
]

console.log(allNavList)



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

};


const PortfolioPage = () => {
  const [projectItems, setMenuItems] = useState(projects)
  const [navList] = useState(allNavList)

  const filterItems= (category) => {
    if(category === 'all') {
      setMenuItems(projects)
      return
    }

    const newProjectItems = projects.filter(
      (item) => item.category === category 
    )

    setMenuItems(newProjectItems)
  }

  ScrollToTop()

  return (
    <>
      <Header />
      <section className="portfolioPage section" id="work">
        
          <a href='/' className='porfolioPage__back-btn button button--flex '>
          <i class='bx bx-left-arrow-alt button__icon-arrow' ></i>
            Back
          </a>
        <div>
          <h2 className="section__title">
            Portfolio
          </h2>
          <span className="section__subtitle">
            My Work
          </span>
        </div>
        
        <List list={navList} filterItems={filterItems} />
        
        <div className="portfolioPage__container containerPortfolio grid">
          <AnimatePresence initial={false}>
            <Items projectItems={projectItems}/>
            
            <div className='portfolioPage__items card card-two card-three'>
              <i class='bx bxl-github portfolioPage__img git--img' ></i>
              <h3 className="portfolioPage__title">View More Projects </h3>
              <a target="_blank" rel='noreferrer' href='https://github.com/k-vernon' className='portfolioPage__description button--flex git--btn'>Github</a>
            </div>

          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PortfolioPage