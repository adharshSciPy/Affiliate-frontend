import React, { useEffect, useState } from 'react'
import { Table, Spin } from 'antd'
import { useVerifiedCompaniesQuery } from '../../features/api/adminApiSlice';

const ActiveCompanies = () => {

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [tableData, setTableData] = useState([]);

  const { data, error, isLoading } = useVerifiedCompaniesQuery({ page, limit })

  useEffect(() => {
    if (data) {
      const structuredData = data?.data?.companies.map((item, index) => {
        return {
          key: index + 1,
          companyName: item.companyName,
          email: item.email,
        };
      });
      setTableData(structuredData);
    } else {
      console.log('Data is not in the expected format or is empty');
    }
  }, [data]);

  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
    },
  ]



  return (
    <div className='activecompanies'>
      <div className="activecompanies__header">
        <h3>Active Companies</h3>
      </div>

      <div className="activecompanies__table">
        {isLoading ? (
          <Spin tip="Loading..." />
        ) : error ? (
          <Alert message="Error loading data" type="error" showIcon />
        ) : (
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={{
              current: page,
              pageSize: limit,
              total: data?.total || 0,
              onChange: (page, pageSize) => {
                setPage(page);
                setLimit(pageSize);
              },
            }}
          />
        )}
      </div>
    </div>
  )
}

export default ActiveCompanies