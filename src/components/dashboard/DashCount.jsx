import React from 'react'

const DashCount = ({ title, icon, count }) => {
  return (
    <div className='dashcard'>
      <div className="dashcard__container">
        <div className="dashcard__icon">
          <img src={icon} alt="dash-count" />
        </div>

        <div className="dashcard__text">
          <p>{count}+</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default DashCount