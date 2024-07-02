import React from 'react'
import { Button, Table } from 'antd'
import { useNavigate } from 'react-router-dom'

const DashTable = ({ heading, columns, data, path }) => {
  const navigate = useNavigate()

  return (
    <div className='dashtable'>
      <div className="dashtable__heading">
        <p>{heading}</p>
        <Button
          size='small'
          onClick={() => path && navigate(path)}
        >
          View All
        </Button>
      </div>
      <div className="dashtable__table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div >
  )
}

export default DashTable