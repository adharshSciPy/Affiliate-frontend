import React from 'react'

function AdminPersonal() {
  return (
    <div className='adminPersonal'>
      <div className="adminPersonal__childs">
        <p>Photo</p>
        <p>John Jacob</p>
        <p>05/07/2001</p>
        <p>male</p>
        <p>Indian</p>
      </div>
      <div className="adminPersonal__childs">
        <p>Residential Address</p>
        <p>Maling Address(if different)</p>
        <p>Phone Number</p>
        <p>Email Address</p>
      </div>
      <div className="adminPersonal__childs">
        <p>Uploaded</p>
        <p>ID Number</p>
        <p>Expiru Date of ID</p>
      </div>
      <div className="adminPersonal__childs">
        <p>Utility Bill</p>
        <p>Uploaded</p>
        <p>Bank Statement</p>
        <p>Rentel Agreement</p>
      </div>
      <div className="adminPersonal__childs">
        <p>IFSC code</p>
        <p>Account Number</p>
        <p>UPI Number</p>
      </div>
    </div>
  )
}

export default AdminPersonal
