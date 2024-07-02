import React from 'react'


const DashDetails = ({ heading, data, isFirstSelected = false }) => {
  return (
    <>
      <div className='dashdetails'>
        <div className="dashdetails__content">
          <h2 className='dashdetails__head'>{heading}</h2>
          {
            data?.map((item, index) => (
              <ul key={index} className={`dashdetails__nobullets ${isFirstSelected && index === 0 ? 'dashdetails__selected' : ''}`}>
                <li className='dashdetails__item'>
                  <span className='dashdetails__title'>{item?.title}</span>
                  <span className='dashdetails__value'>{item?.value}</span>
                </li>
              </ul>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default DashDetails