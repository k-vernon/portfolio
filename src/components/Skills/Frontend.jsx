import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Skills</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class="devicon-html5-plain "></i>
              </span>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>
          
          <div className="skills__data">
            <div>
              <span className="skills__level"> 
                <i class="devicon-css3-plain"></i>
              </span>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class="devicon-javascript-plain"></i>
              </span>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>


        </div>

        <div className="skills__group">
          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class="devicon-react-original"></i>
              </span>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          
          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class="devicon-bootstrap-plain"></i>
              </span>
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <span className="skills__level">
                <i class="devicon-typescript-plain"></i>
              </span>
              <h3 className="skills__name">TypeScript</h3>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Frontend