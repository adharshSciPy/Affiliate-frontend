import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardNavbar, Sidebar } from '../components'
import { usePersonalInfoQuery } from "../features/api/adminApiSlice";
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const CompanyLayout = () => {
    const { logId } = useAuth()
    const [isOpen, setIsOpen] = useState(true)
    const params = useParams();
    const [companyData, setCompanyData] = useState([])
    const { data, error, isLoading, refetch } = usePersonalInfoQuery({
        companyId: logId,
    });
    
    useEffect(() => {
        refetch();
    }, [params]);

    useEffect(() => {
        setCompanyData(data?.data);
    }, [data]);
    console.log("data", data?.data?.companyName)




    return (
        <div className='dashboard'>
            <div className="dashboard__container">
                <div className="dashboard__navbar">
                    <DashboardNavbar
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        message={`Welcome ${companyData?.companyName}`}
                    />
                </div>

                <div className="dashboard__sidebar">
                    <Sidebar
                        isOpen={isOpen}
                    />
                </div>

                <div className="dashboard__body">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default CompanyLayout