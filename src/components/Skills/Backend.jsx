import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Skills</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class="devicon-nodejs-plain"></i>
              </span>
              <h3 className="skills__name">NodeJS</h3>
            </div>
          </div>
          
          <div className="skills__data">
            <div>
              <span className="skills__level">
               <i class="devicon-postgresql-plain"></i>
              </span>
              <h3 className="skills__name">PostgreSQL</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class='bx bx-expand-horizontal' ></i>
              </span>
              <h3 className="skills__name">RESTful Routing</h3>
            </div>
          </div>


        </div>

        <div className="skills__group">

          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class="devicon-express-original"></i>
              </span>
              <h3 className="skills__name">Express</h3>
            </div>
          </div>
          
          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class="devicon-mongodb-plain"></i>
              </span>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class='bx bxs-file-json' ></i>
              </span>
              <h3 className="skills__name">JSON:API</h3>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Backend