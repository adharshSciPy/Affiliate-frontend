import { React, useState } from "react";
import bgCoverImg from "../../assets/images/affreg-coverimage.jpg";
import { Button, Tabs } from "antd";
import AffiliaterPersonal from "./AffiliaterPersonal";
import AffiliaterProof from "./AffiliaterProof";
import AffiliaterBank from "./AffiliaterBank";
import profile from "../../assets/images/affiliate-profile.png";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../../components/modals/LogoutModal";
import { useNotification } from "../../context/NotificationContext";
import useAuth from "../../hooks/useAuth";
import { useAuthLogoutMutation } from "../../features/api/authApiSlice";

const AffiliaterRegistrationPage = () => {
  const [authLogout, { isLoading, isSuccess, isError, error }] =
    useAuthLogoutMutation();
  const [isModal, setIsModal] = useState(false);
  const { notification } = useNotification();
  const [activeKey, setActiveKey] = useState("1");
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
        notification("success", response?.message, "", "bottomRight");
        navigate("/auth/login", { replace: true });
      }
    } catch (err) {
      notification(
        "error",
        "Logout Failed",
        error?.data?.message || "An error occurred",
        "bottomRight"
      );
    }
  };
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
              <Button onClick={() => showmodal()}>Logout</Button>
            </div>
          </div>
          <div className="affiliaterregpage__icon">
            <img src={profile} alt="" />
          </div>
          <div className="affiliaterregpage__tab">
            <Tabs
              defaultActiveKey="1"
              tabPosition="top"
              onChange={handleTabChange}
              items={[
                {
                  label: "Personal Information",
                  key: "1",
                  children: (
                    <>
                      <AffiliaterPersonal />
                    </>
                  ),
                },
                {
                  label: "Proof of Address",
                  key: "2",
                  children: (
                    <>
                      <AffiliaterProof />
                    </>
                  ),
                },
                {
                  label: "Bank Info",
                  key: "3",
                  children: (
                    <>
                      <AffiliaterBank />
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <LogoutModal
          isModal={isModal}
          setIsModal={setIsModal}
          logout={handleLogout}
        />
      </div>
    </>
  );
};

export default AffiliaterRegistrationPage;
