import React from "react";

import dashIcon1 from "../../assets/dashboard-icons/affiliaterdash1.png";
import dashIcon2 from "../../assets/dashboard-icons/affiliaterdash2.png";
import { DashCount, DashTable } from "../../components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AffiliaterTransaction = () => {
  const dashcard = [
    {
      icon: dashIcon1,
      title: "Transactions",
      count: 7,
    },
    {
      icon: dashIcon2,
      title: "Total Earnings",
      count: 25000,
    },
  ];

  const columns = [
    {
      title: <Avatar size="large" icon={<UserOutlined />} />,
      dataIndex: "avatar",
      key: "avatar",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const tableData = [
    {
      avatar: <Avatar size="large" icon={<UserOutlined />} />,
      fullName: "Brown",
      email: "brown@gmail.com",
      address: "New York No. 1 Lake Park",
    },
    {
      avatar: <Avatar size="large" icon={<UserOutlined />} />,
      fullName: "Green",
      email: "green@gmail.com",
      address: "London No. 1 Lake Park",
    },
    {
      avatar: <Avatar size="large" icon={<UserOutlined />} />,
      fullName: "Black",
      email: "black@green.com",
    },
  ];
  return (
    <div className="affiliatertransaction">
      <div className="affiliatertransaction__container">
        <div className="affiliatertransaction__container--counts">
          {dashcard.map((item, index) => {
            return (
              <DashCount
                key={index}
                icon={item.icon}
                title={item.title}
                count={item.count}
              />
            );
          })}
        </div>
        <div className="affiliatertransaction__container--table">
          <h3>Transactions</h3>
          <div className="affiliatertransaction__container--dashtable">
            <DashTable
              columns={columns}
              data={tableData}
              path="/admin/affiliaters"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliaterTransaction;
