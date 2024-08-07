import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCompanyDetailsQuery } from '../../features/api/adminApiSlice'

function CompanyBank() {
  const params = useParams()
  const [companyData, setCompanyData] = useState([])
  const { data, error, isLoading, refetch } = useCompanyDetailsQuery({ companyId: params?.id })

  useEffect(() => {
    refetch()
  }, [params])

  useEffect(() => {
    setCompanyData(data?.data)
  }, [data])

  console.log("datassss", data)

  return (
    <div className='companybank'>
      <div className="companybank__tabs">
        <p>IFSC Code : {companyData?.IFSC}</p>
        <p>Account Number : {companyData?.accountNumber}</p>
        <p>UPI Number : {companyData?.UPINumber}</p>
      </div>
    </div>
  )
}

export default CompanyBank
