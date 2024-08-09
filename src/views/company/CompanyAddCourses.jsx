import { React, useState } from 'react'
import { Button, Tabs } from 'antd'
import { useNavigate } from 'react-router-dom';
import CompanyCourses from './CompanyCourses';
import CompanyStudyAbroad from './CompanyStudyAbroad';
import { useNotification } from '../../context/NotificationContext';
import useAuth from '../../hooks/useAuth'



const CompanyAddCourses = () => {
  const [isModal, setIsModal] = useState(false);
  const { notification } = useNotification();
  const [activeKey, setActiveKey] = useState('1');
  const handleTabChange = (key) => {
    setActiveKey(key);
  };
  const navigate = useNavigate();

  const showmodal = () => {
    setIsModal(true);
  };


  return (
    <>
      <div className="companyaddcourses">
        <div className='companyaddcourses__container'>
          <Tabs
            defaultActiveKey="1"
            tabPosition='top'
            onChange={handleTabChange}
            items={[
              {
                label: 'Courses',
                key: '1',
                children: (
                  <>
                    <CompanyCourses />
                  </>
                )
              },
              {
                label: 'Study Abroad',
                key: '2',
                children: (
                  <>
                    <CompanyStudyAbroad />
                  </>

                )
              },


            ]}
          />
        </div>
      </div>


    </>
  )
}

export default CompanyAddCourses;