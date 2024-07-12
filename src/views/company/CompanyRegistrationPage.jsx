import React from 'react'
import bgCoverImg from '../../assets/images/reg-coverimage.jpg'
import { Button } from 'antd'

const CompanyRegistrationPage = () => {
  return (
    <>
      <div className='companyregpage'
        style={{
          background: `url(${bgCoverImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='companyregpage__container'>
          <div className="companyregpage__header">
            <div className="companyregpage__header--text">
              <h3>Tell us more yourself</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error?</p>
            </div>

            <div className="companyregpage__header--logout">
              <Button>Logout</Button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CompanyRegistrationPage