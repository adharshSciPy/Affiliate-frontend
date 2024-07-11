import React from 'react'
import { useParams } from 'react-router-dom'

const AdminAffiliaterDetails = () => {

  const params = useParams()
  console.log('params', params)
  return (
    <div>AdminAffiliaterDetails = {params?.id}</div>
  )
}

export default AdminAffiliaterDetails