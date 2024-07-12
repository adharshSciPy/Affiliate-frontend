import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs } from "antd";
import CompanyPersonal from "./CompanyPersonal";
import profile from "../../assets/images/affiliate-profile.png";
import {
  CalendarBlank,
  Envelope,
  MapPin,
  Phone,
  WhatsappLogo,
  YoutubeLogo,
  InstagramLogo,
  FacebookLogo,
  XLogo,
} from "@phosphor-icons/react";

import { useUserDetailsByIdQuery } from "../../features/api/adminApiSlice";

const AdminCompanyDetails = () => {
  const params = useParams();
  const [userData, setUserData] = useState([]);
  const { data, error, isLoading, refetch } = useUserDetailsByIdQuery({
    userId: params?.id,
  });

  useEffect(() => {
    refetch();
  }, [params]);

  useEffect(() => {
    setUserData(data?.data);
  }, [data]);

  return (
    <div className=" admincompany">
      <div className="admincompany__container">
        <div className="admincompany__head">
          <img src={profile} alt="" />
        </div>

        <div className="admincompany__detials">
          <h3>
            {userData?.firstName} {userData?.lastName}
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            totam repudiandae repellat{" "}
          </p>
          <div className="admincompany__address">
            <span className="admincompany__address--links">
              <Envelope size={24} />
              {userData?.email}
            </span>
            <span className="admincompany__address--links">
              <MapPin size={24} />
              Los Angels,USA
            </span>
            <span className="admincompany__address--links">
              <CalendarBlank size={24} />
              Joined April 2022
            </span>
            <span className="admincompany__address--links">
              <Phone size={24} />
              8345373475
            </span>
            <span className="admincompany__address--links">
              <WhatsappLogo size={24} />
              8345373475
            </span>
          </div>
          <div className="admincompany__icons">
            <span className="admincompany___icons--sociallinks">
              <YoutubeLogo size={30} color="#ee4444" weight="fill" />
            </span>
            <span className="admincompany___icons--sociallinks">
              <InstagramLogo size={28} color="#c51168" />
            </span>
            <span className="admincompany___icons--sociallinks">
              <FacebookLogo size={28} color="#2c6ef2" weight="fill" />
            </span>
            <span className="admincompany___icons--sociallinks">
              <XLogo size={28} color="#3c3d3e" weight="thin" />
            </span>
          </div>
          <div className="admincompany__tab">
            <Tabs
              items={[
                {
                  label: "Personal Information",
                  key: "1",
                  children: <CompanyPersonal />,
                },
                {
                  label: "Contact Information",
                  key: "2",
                  // children: <CompanyContact />,
                },
                {
                  label: "Identification Document",
                  key: "3",
                  // children: <CompanyIdentification />,
                },
                {
                  label: "Proof Of Address",
                  key: "4",
                  // children: <CompanyProof />,
                },
                {
                  label: "Bussiness Information",
                  key: "5",
                  // children: <CompanyBussiness />,
                },
                {
                  label: "Bussiness Licences",
                  key: "6",
                  // children: <CompanyLicences/>,
                },
                {
                  label: "Payments",
                  key: "7",
                  // children: <CompanyBussiness />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyDetails;
