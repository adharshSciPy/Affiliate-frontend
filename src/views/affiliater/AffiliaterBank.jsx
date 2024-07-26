import { React, useState } from "react";
import { Button, Tabs } from "antd";
import AffiliaterDomestic from "./affiliaterDomestic";
import AffiliaterInternational from "./AffiliaterInternational";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";
import { useAuthLogoutMutation } from "../../features/api/authApiSlice";

const AffiliaterBankPage = () => {
  const [activeKey, setActiveKey] = useState("1");
  const handleTabChange = (key) => {
    setActiveKey(key);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="affiliaterbank">
        <div className="affiliaterbank__tab">
          <Tabs
            defaultActiveKey="1"
            tabPosition="top"
            onChange={handleTabChange}
            items={[
              {
                label: "Domestic Money Transfer",
                key: "1",
                children: (
                  <>
                    <AffiliaterDomestic />
                  </>
                ),
              },
              {
                label: "International Money Transfer",
                key: "2",
                children: (
                  <>
                    <AffiliaterInternational />
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default AffiliaterBankPage;
