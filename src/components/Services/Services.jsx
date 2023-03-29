import React, { useState } from 'react'
import './services.css'

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="services section" id="services">
      <div data-aos="fade-right">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>
      </div>

      <div className="services__container container grid">
        <div className="services__content" data-aos="fade-right">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Web <br/> Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Web Development</h3>
              <p className="services__model-description">Using React, CSS, and JavaScript, I create fast, dynamic, and user-friendly web apps.</p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Creating custom website designs to reflect your brand identity.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Developing responsive, user-friendly websites for all devices</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Implementing UI designs and consistent branding throughout the site.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Integrating interactive elements like forms, maps, and galleries.</p>
                </li>

              
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content" data-aos="fade-right">
          <div>
            <i className="uil uil-palette services__icon"></i>
            <h3 className="services__title">Graphic <br/> Designing</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Graphic Designer</h3>
              <p className="services__model-description">Service with over 6 years of experience. Providing quality work to clients and companies.</p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Custom designs to match your brand's style and aesthetic.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">High-quality logos, business cards, and marketing materials.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Using the latest design techniques and software.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Delivering designs in various file formats for compatibility.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Collaborating closely with you to bring your vision to life.</p>
                </li>
              </ul>
              
            </div>
          </div>
        </div>

        <div className="services__content" data-aos="fade-right">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">UI/UX <br/> Designing</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">UI/UX</h3>
              <p className="services__model-description">I bring concepts to reality through various design strategies.</p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Creating wireframes and prototypes to test and iterate on design ideas.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Designing intuitive and visually appealing user interfaces that prioritize user needs and goals.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Collaborating with other developers to ensure seamless implementation of designs.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Incorporating best practices and industry standards to ensure optimal user experience.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Providing ongoing support and maintenance to ensure continued usability and success of the product.</p>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services