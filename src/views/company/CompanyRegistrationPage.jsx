import { React, useState } from 'react'
import bgCoverImg from '../../assets/images/reg-coverimage.jpg'
import { Button, Tabs } from 'antd'
import Icon from "../../assets/images/affiliate-profile.png"
import CompanyBank from './CompanyBank'
import CompanyBusiness from './CompanyBusiness'
import CompanyPersonal from './CompanyPersonal'
import CompanyProof from './CompanyProof'
import CompanyLicenses from './CompanyLicenses'
import { useNavigate } from 'react-router-dom';
import LogoutModal from '../../components/modals/LogoutModal'
import { useNotification } from '../../context/NotificationContext';
import useAuth from '../../hooks/useAuth'
import { useAuthLogoutMutation } from '../../features/api/authApiSlice';


const CompanyRegistrationPage = () => {
  const [authLogout, { isLoading, isSuccess, isError, error }] = useAuthLogoutMutation();
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

  const handleLogout = async () => {
    try {
      const response = await authLogout().unwrap();
      if (response) {
        notification('success', response?.message, '', 'bottomRight');
        navigate('/auth/login', { replace: true });
      }
    } catch (err) {
      notification('error', 'Logout Failed', error?.data?.message || 'An error occurred', 'bottomRight');
    }
  };
  return (
    <>
      <div className='companyregpage'
        style={{
          background: `url(${bgCoverImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='companyregpage__container'>
          <div className="companyregpage__header">
            <div className="companyregpage__header--text">
              <h3>Tell us more yourself</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error?</p>
            </div>

            <div className="companyregpage__header--logout" >
              <Button onClick={() => showmodal()}>Logout</Button>
            </div>
          </div>
          <div className="companyregpage__icon">
            <img src={Icon} />
          </div>
          <div className="companyregpage__tabs">
            <Tabs
              defaultActiveKey="1"
              tabPosition='top'
              onChange={handleTabChange}
              items={[
                {
                  label: 'Personal Information',
                  key: '1',
                  children: (
                    <>
                      <CompanyPersonal />
                    </>
                  )
                },
                {
                  label: 'Proof of Address',
                  key: '2',
                  children: (
                    <>
                      <CompanyProof />
                    </>

                  )
                },
                {
                  label: 'Business Information',
                  key: '3',
                  children: (
                    <>
                      <CompanyBusiness />
                    </>
                  )
                },
                {
                  label: 'Business Licenses',
                  key: '4',
                  children: (
                    <>
                      <CompanyLicenses />
                    </>
                  )
                },
                {
                  label: 'Bank Info',
                  key: '5',
                  children: (
                    <>
                      <CompanyBank />
                    </>
                  )
                }
              ]}
            />
          </div>
        </div>
        <LogoutModal isModal={isModal} setIsModal={setIsModal} logout={handleLogout} />
      </div>

    </>
  )
}

export default CompanyRegistrationPage