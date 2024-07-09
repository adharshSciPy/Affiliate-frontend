import React, { useEffect, useState } from 'react';
import { Table, Spin, Alert, Button } from 'antd';
import { useNewCompaniesQuery, useVerifyNewCompanyMutation } from '../../features/api/adminApiSlice';
import { AdminCompanyVerifyModal } from '../../components';

const AdminCompanyVerifications = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [tableData, setTableData] = useState([]);
  const [isModal, setIsModal] = useState(false)
  const [modalData, setModalData] = useState([])

  const { data, error, isLoading, refetch } = useNewCompaniesQuery({ page, limit });
  const [verifyCompany] = useVerifyNewCompanyMutation();

  // verify company api calling logic
  const handleVerifyCompany = async () => {
    try {
      await verifyCompany({ companyId: modalData.id }).unwrap();
      notification.success({ message: 'Company verified successfully!' });
      refetch()
      setIsModalVisible(false);

    } catch (err) {
      notification.error({ message: 'Verification failed!', description: err.message });
    }
  };

  // modal invoking
  const handleButtonClick = (details) => {
    setIsModal(true)
    setModalData(details)
  }

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
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => handleButtonClick(record?.rowData)}>Verify</Button>
      ),
    },
  ]

  // to fetch latest data via api
  useEffect(() => {
    if (data) {
      const structuredData = data?.data?.companies.map((item, index) => {
        return {
          key: index + 1,
          id: item?._id,
          companyName: item?.companyName,
          email: item?.email,
          rowData: item
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
      <AdminCompanyVerifyModal
        isModal={isModal}
        modalData={modalData}
        setIsModal={setIsModal}
        verify={handleVerifyCompany} 
        />
    </div>
  );
};

export default AdminCompanyVerifications;
