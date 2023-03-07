import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Mid-level</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">25+ Projects</span>
      </div>

      <div className="about__box">
        <i class='bx bx-group about__icon' ></i>
        <h3 className="about__title">Collaborative</h3>
        <span className="about__subtitle">Teams & Clients</span>
      </div>
    </div>
  )
}

export default Info