import React from 'react'

const DashDetails = ({ heading, data, isFirstSelected = false }) => {
  return (
    <div className='dashdetails'>
      <div className="dashdetails__heading">
        <p>{heading}</p>
      </div>

      <div className="dashdetails__body">
        {
          data?.map((item, index) => {
            return (
              <div key={index} className={`dashdetails__item ${isFirstSelected && index === 0 ? 'dashdetails__selected' : ''}`}>
                <p>{item?.title}</p>
                <p>{item?.value}</p>
              </div>

            )
          })
        }
      </div>

      {/* <div className="dashdetails__footer">
        <p>More</p>
      </div> */}
    </div>
  )
}

export default DashDetails