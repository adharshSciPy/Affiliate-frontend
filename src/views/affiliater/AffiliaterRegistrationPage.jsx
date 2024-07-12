import React from 'react'
import bgCoverImg from '../../assets/images/affreg-coverimage.jpg'
import { Button } from 'antd'

const AffiliaterRegistrationPage = () => {
  return (
    <>
      <div className='affiliaterregpage'
        style={{
          background: `url(${bgCoverImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
          <div className='affiliaterregpage__container'>
            <div className="affiliaterregpage__header">
              <div className="affiliaterregpage__header--text">
                <h3>Tell us more about yourself</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error?</p>
              </div>

              <div className="affiliaterregpage__header--logout">
                <Button>Logout</Button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default AffiliaterRegistrationPage