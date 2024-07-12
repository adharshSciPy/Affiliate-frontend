import React from "react";
import bgCoverImg from "../../assets/images/affreg-coverimage.jpg";
import { Button,Tabs } from "antd";
import AffiliaterPersonal from "./AffiliaterPersonal";
import profile from "../../assets/images/affiliate-profile.png";

const AffiliaterRegistrationPage = () => {
  return (
    <>
      <div
        className="affiliaterregpage"
        style={{
          background: `url(${bgCoverImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="affiliaterregpage__container">
          <div className="affiliaterregpage__header">
            <div className="affiliaterregpage__header--text">
              <h3>Say more about yourself</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, error?
              </p>
            </div>

            <div className="affiliaterregpage__header--logout">
              <Button>Logout</Button>
            </div>
          </div>
          <div className="affiliaterregpage__head">
            <img src={profile} alt="" />
          </div>
          <div className="affiliaterregpage__tab">
            <Tabs
              items={[
                {
                  label: "Personal Information",
                  key: "1",
                    children: <AffiliaterPersonal/>,
                },
                {
                  label: "Proof of Address",
                  key: "2",
                  // children: <CompanyContact />,
                },
                {
                  label: "Business Information",
                  key: "3",
                  // children: <CompanyIdentification />,
                },
                {
                  label: "Bank Info",
                  key: "4",
                  // children: <CompanyProof />,
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliaterRegistrationPage;
