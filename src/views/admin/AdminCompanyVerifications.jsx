import React, { useEffect, useState } from 'react';
import { Table, Spin, Alert, Button } from 'antd';
import { useNewCompaniesQuery, useVerifyNewCompanyMutation, useVerifiedCompaniesQuery } from '../../features/api/adminApiSlice';
import { AdminCompanyVerifyModal } from '../../components';
import { useNotification } from '../../context/NotificationContext';

const AdminCompanyVerifications = () => {
  const { notification } = useNotification()
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [tableData, setTableData] = useState([]);
  const [isModal, setIsModal] = useState(false)
  const [modalData, setModalData] = useState([])
  const [isEmptyData, setIsEmptyData] = useState(false)

  const { data, error, isLoading, refetch } = useNewCompaniesQuery({ page, limit });
  const { refetch: refetchActiveCompanies } = useVerifiedCompaniesQuery()
  const [verifyCompany] = useVerifyNewCompanyMutation();

  // verify company api calling logic
  const handleVerifyCompany = async () => {
    try {
      const response = await verifyCompany({ companyId: modalData?._id }).unwrap();
      if (response) {
        notification('success', 'Company verified successfully!', response?.data?.message, 'bottomRight');
        setIsModal(false);
        refetchActiveCompanies();
        refetch();
      }
    } catch (err) {
      console.log('errpr', err)
      notification('error', 'Verification failed', err?.data?.message, 'bottomRight');
    }
  };

  // modal invoking
  const handleButtonClick = (details) => {
    setIsModal(true)
    setModalData(details)
  }

  // table coloumns
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

  // error management
  useEffect(() => {
    if (error?.status === 404) {
      setIsEmptyData(true)
    }
    else {
      setIsEmptyData(false)
    }
  }, [error])

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
    <div className='adminbasicstyle'>
      <div className="adminbasicstyle__header">
        <h3>New Registrations</h3>
      </div>

      <div className="adminbasicstyle__table">
        {isLoading ? (
          <Spin tip="Loading..." />
        ) : error ? (
          <Alert message={`${isEmptyData ? 'Waiting for new companies to register' : 'Something error happened'}`} type={`${isEmptyData ? 'warning' : 'error'}`} showIcon />
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
