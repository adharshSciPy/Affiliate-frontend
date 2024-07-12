import React, { useEffect, useState } from 'react'
import { Table, Spin, Alert, Button, Flex } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useVerifiedCompaniesQuery, useDeleteCompanyMutation, useCompanyBlockManageMutation } from '../../features/api/adminApiSlice';
import { DeleteModal } from '../../components';
import { useNotification } from '../../context/NotificationContext';

const AdminActiveCompanies = () => {

  const navigate = useNavigate();
  const { notification } = useNotification()
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [tableData, setTableData] = useState([]);
  const [isEmptyData, setIsEmptyData] = useState(false)
  const [companyId, setCompanyId] = useState(null)
  const [isModal, setIsModal] = useState(false)

  const { data, error, isLoading, refetch } = useVerifiedCompaniesQuery({ page, limit })
  const [deleteCompany] = useDeleteCompanyMutation()
  const [companyBlockManage] = useCompanyBlockManageMutation()

  // table data formatting
  useEffect(() => {
    if (data) {
      const structuredData = data?.data?.companies.map((item, index) => {
        return {
          key: index + 1,
          id: item?._id,
          companyName: item?.companyName,
          email: item?.email,
          isBlocked: item?.isBlocked
        };
      });
      setTableData(structuredData);
    } else {
      console.log('Data is not in the expected format or is empty');
    }
  }, [data]);

  const handleButtonClick1 = (id, e) => {
    e.stopPropagation();
    setCompanyId(id)
    setIsModal(true)
  }

  const handleButtonClick2 = async (record, e) => {
    e.stopPropagation();
    let payload = {
      isBlocked: !record?.isBlocked
    }
    try {
      const response = await companyBlockManage({ companyId: record?.id, payload }).unwrap();
      if (response) {
        notification('success', `Company ${record?.isBlocked ? 'Unblocked' : 'blocked'} Succesfully`, response?.data?.message, 'bottomRight');
        refetch();
      }
    } catch (err) {
      console.log('error', err)
      notification('error', `Company ${record?.isBlocked ? 'Unblock' : 'block'} Failed`, err?.data?.message, 'bottomRight');
    }
  }

  // delete logic
  const handleDeleteCompany = async () => {
    try {
      const response = await deleteCompany({ companyId: companyId }).unwrap();
      if (response) {
        notification('success', 'Company Deleted successfully!', response?.data?.message, 'bottomRight');
        setIsModal(false);
        refetch();
      }
    } catch (err) {
      console.log('error', err)
      notification('error', 'Verification failed', err?.data?.message, 'bottomRight');
    }
  };

  // table columns
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
        <>
          <Flex gap={10}>
            <Button onClick={(e) => handleButtonClick1(record?.id, e)} danger>Delete</Button>
            <Button onClick={(e) => handleButtonClick2(record, e)}>{record?.isBlocked ? 'Unblock' : 'Block'}</Button>
          </Flex>
        </>
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

  return (
    <div className='adminbasicstyle'>
      <div className="adminbasicstyle__header">
        <h3>Active Companies</h3>
      </div>

      <div className="adminbasicstyle__table">
        {isLoading ? (
          <Spin tip="Loading..." />
        ) : error ? (
          <Alert message={`${isEmptyData ? 'No Active Companies found on Database' : 'Something error happened'}`} type={`${isEmptyData ? 'warning' : 'error'}`} showIcon />
        ) : (
          <Table
            columns={columns}
            dataSource={tableData}
            onRow={(record) => {
              return {
                onClick: () => {
                  navigate(`/admin/companies/${record?.id}`);
                }
              };
            }}
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

      <DeleteModal isModal={isModal} setIsModal={setIsModal} deleteFn={handleDeleteCompany} />
    </div>
  )
}

export default AdminActiveCompanies