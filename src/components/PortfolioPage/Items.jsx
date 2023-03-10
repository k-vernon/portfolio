import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Items = ({ projectItems }) => {
  console.log(projectItems)
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, technologies, repositoryLink, deploymentLink } = projectItem;
        return(
          <motion.div 
            layout 
            animate={{ opacity: 1, scale: 1 }} 
            initial={{ opacity: 0.8, scale: 0.6 }} 
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition= {{ duration: 0.3 }}
            className="portfolioPage__items card card-two" 
            key={id}
          >
            <div className="portfolioPage__img-wrapper">
              <img src={img} alt="" className="portfolioPage__img" />
            </div>
            <span className="portfolioPage__category text-cs">{category}</span>
            <h3 className="portfolioPage__title">{title}</h3>
            <h4>{technologies}</h4>
            <p className="portfolioPage__description">{description}</p>
            

            
            <div>
              <a target="_blank" rel='noreferrer' href={deploymentLink} className="link site__link ">
              Visit Website
              <i  class='bx bx-right-arrow-alt portfolioPage__icon-arrow' ></i>
              </a> <br/>
              <a target="_blank" rel='noreferrer' href={repositoryLink} className="link repo__link">
              Source Code
              <i class='bx bx-right-arrow-alt portfolioPage__icon-arrow' ></i>
              </a>
            </div>
            

          </motion.div>
        )
      })}
    </>
  )
}

export default Items