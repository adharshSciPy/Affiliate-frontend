import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCompanyDetailsQuery } from '../../features/api/adminApiSlice'

function CompanyBussiness() {
  const params = useParams()
  const [companyData, setCompanyData] = useState([])
  const { data, error, isLoading, refetch } = useCompanyDetailsQuery({ companyId: params?.id })

  useEffect(() => {
    refetch()
  }, [params])

  useEffect(() => {
    setCompanyData(data?.data)
  }, [data])


  return (
    <div className='companybussiness'>
      <div className="companybussiness__tabs">
        <p>Company Name : {companyData?.companyName}</p>
        <p>Registration Number : {companyData?.registerNumber}</p>
        <p>Address of the Company : {companyData?.companyAddress}</p>
        <p>Nature of Bussiness : {companyData?.businessNature}</p>
        <p>List of Directors and Beneficial owners : {companyData?.listOfOwners}</p>
      </div>
    </div>
  )
}

export default CompanyBussiness
