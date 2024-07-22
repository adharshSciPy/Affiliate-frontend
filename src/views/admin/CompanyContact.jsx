import React from 'react'

function CompanyContact({ userData }) {
  return (
    <div className='companycontact'>
      <div className="companycontact__tabs">
        <p>Residential Address : {" "}{userData?.Address}</p>
        <p>Phone Number : {" "}{userData?.phoneNumber}</p>
        <p>Email Address : {" "}{userData?.email}</p>
        <p>Website : {" "}{userData?.website}</p>
      </div>
    </div>
  )
}

export default CompanyContact
