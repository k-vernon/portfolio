import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div data-aos="fade-right">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
      </div>

      <div className="skills__container container grid">
        <div data-aos="fade-right">
          <Frontend />
        </div>
        <div data-aos="fade-right">
          <Backend />
        </div>
      </div>
    </section>
  )
}

export default Skills