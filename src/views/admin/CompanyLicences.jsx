import React from 'react'
import { Button } from 'antd'

function CompanyLicences() {
  return (
    <div className='companylicences'>
      <div className="companylicences__tabs">
        <p>Articles of incorporation(or certificate of incorporation) : <Button>Upload</Button></p>
        <p>Articles of organization(or certificate of organization) : <Button>Upload</Button></p>
        <p>Partnership Agreement : <Button>Upload</Button></p>
      </div>
    </div>
  )
}

export default CompanyLicences
