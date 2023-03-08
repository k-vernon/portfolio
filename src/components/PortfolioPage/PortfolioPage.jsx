import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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

  return (
    <>
      <Header />
      <section className="portfolioPage section" id="work">
        <h2 className="section__title">Portfolio</h2>
        <p className="section__subtitle">
          My <span>Work</span>
        </p>
        
        <List list={navList} filterItems={filterItems} />

        <div className="portfolioPage__container containerPortfolio grid">
          <AnimatePresence initial={false}>
            <Items projectItems={projectItems}/>
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PortfolioPage