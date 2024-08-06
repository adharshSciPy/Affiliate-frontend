import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCompanyDetailsQuery } from '../../features/api/adminApiSlice';

function CompanyIdentification() {

  const params = useParams();
  const [companyData, setCompanyData] = useState([])
  const { data, error, isLoading, refetch } = useCompanyDetailsQuery({ companyId: params?.id })


  useEffect(() => {
    refetch()
  }, [params])

  useEffect(() => {
    setCompanyData(data?.data)
  }, [data])


  return (
    <div className='companyidentification'>
      <div className="companyidentification__tabs">
        <p>ID Number : {companyData?.IDNumber}</p>
        <p>Expiry Date of ID : {companyData?.ExpiryDateOfID}</p>
      </div>
    </div>
  )
}

export default CompanyIdentification
