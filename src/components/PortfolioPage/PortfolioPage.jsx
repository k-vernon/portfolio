import React from 'react'

//COMPONENTS
import Header from '../Header'

const PortfolioPage = () => {
  console.log('SANITY CHECK!!!')
  return (
    <>
      <Header />
      <section className="portfolio section" id="home">
        <div className="portfolio__container container grid">
          <div className="portfolio__content grid">
            <div>PortfolioPage</div>
          </div> 
        </div>
      </section>
    </>
  )
}

export default PortfolioPage