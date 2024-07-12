import React from 'react'
import bgCoverImg from '../../assets/images/reg-coverimage.jpg'

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
            <h3>Tell us more about your company</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error?</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default CompanyRegistrationPage