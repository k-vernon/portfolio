import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="qualification section">
      <div data-aos="fade-right">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
      </div>

      <div className="qualification__container container" data-aos="fade-right">
        <div className="qualification__tabs" data-aos="fade-right">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections" >
          
        <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content" } >
            <div className="qualification__data" >
              <div data-aos="fade-right">
                <h3 className="qualification__title">General Assembly</h3>
                <span className="qualification__subtitle">Remote - Bootcamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder" data-aos="fade-right"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder" data-aos="fade-right"></span>
                <span className="qualification__line"></span>
              </div>

              <div data-aos="fade-right">
                <h3 className="qualification__title">Graphic Design</h3>
                <span className="qualification__subtitle">Remote - Freelance</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div data-aos="fade-right">
                <h3 className="qualification__title">Design and Media Tech</h3>
                <span className="qualification__subtitle">Marietta - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder" data-aos="fade-right"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content" }>
            <div className="qualification__data">
              <div data-aos="fade-right">
                <h3 className="qualification__title">General Assembly Fellow</h3>
                <span className="qualification__subtitle">Remote - Bootcamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder" data-aos="fade-right"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder" data-aos="fade-right"></span>
                <span className="qualification__line"></span>
              </div>

              <div data-aos="fade-right">
                <h3 className="qualification__title">Content Creator</h3>
                <span className="qualification__subtitle">Twitch </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data" >
              <div data-aos="fade-right"> 
                <h3 className="qualification__title">Graphic Design</h3>
                <span className="qualification__subtitle">Remote - Freelance</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder" data-aos="fade-right"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder" data-aos="fade-right"></span>
                <span className="qualification__line"></span>
              </div>

              <div data-aos="fade-right">
                <h3 className="qualification__title">Digital Illustration</h3>
                <span className="qualification__subtitle">Remote - Freelance</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default Qualification