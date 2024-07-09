import React, { useEffect, useState } from 'react';
import { Table, Spin, Alert } from 'antd';
import { useNewCompaniesQuery } from '../../features/api/adminApiSlice';

const AdminCompanyVerifications = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [tableData, setTableData] = useState([]);

  const { data, error, isLoading } = useNewCompaniesQuery({ page, limit });

  const columns =[
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

  return (
    <div className='admincompanyverifications'>
      <div className="admincompanyverifications__header">
        <h3>New Requests</h3>
      </div>

      <div className="admincompanyverifications__table">
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
  );
};

export default AdminCompanyVerifications;
