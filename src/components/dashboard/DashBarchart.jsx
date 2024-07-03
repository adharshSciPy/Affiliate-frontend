import { Button } from 'antd'
import React from 'react'

const DashBarchart = () => {
  return (
    <div className='dashbarchart'>
      <div className="dashbarchart__heading">
        <p>Bar Chart</p>
        <div className="dashbarchart__heading--buttons">
          <Button size="small">Weekly</Button>
          <Button size="small">Monthly</Button>
          <Button size="small">Yearly</Button>
        </div>
      </div>

      <div className="dashbarchart__body">
        Body
      </div>
    </div>
  )
}

export default DashBarchart