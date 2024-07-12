import { React, useState } from 'react'
import bgCoverImg from '../../assets/images/reg-coverimage.jpg'
import { Button, Tabs } from 'antd'
import Icon from "../../assets/images/affiliate-profile.png"
import CompanyBank from './CompanyBank'
import CompanyBusiness from './CompanyBusiness'
import CompanyPersonal from './CompanyPersonal'
import CompanyProof from './CompanyProof'


const CompanyRegistrationPage = () => {
  const [activeKey, setActiveKey] = useState('1');
  const handleTabChange = (key) => {
    setActiveKey(key);
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
              <h3>Tell us more about your company</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error?</p>
            </div>

            <div className="companyregpage__header--logout">
              <Button>Logout</Button>
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
                  label: 'Bank Info',
                  key: '4',
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
      </div>

    </>
  )
}

export default CompanyRegistrationPage