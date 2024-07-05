import React from "react";
import company from "../../assets/images/affiliate-profile.png";
import { Progress } from "antd";
import StarRating from "../rating/StarRating";

const DashCompanyProfile = () => {
  return (
    <div className="dashcompanyprofile">
      <div className="dashcompanyprofile__heading">
        <span>
          <img src={company} alt="Company Logo" />
        </span>
        <h1>SciPy Technologies</h1>
        <p>Service Provider</p>
      </div>
      <div className="dashcompanyprofile__courses">
        <div className="dashcompanyprofile__total">
          <p>Total Courses</p>
          <p>21</p>
        </div>
        <div className="dashcompanyprofile__listed">
          <p>Listed Courses</p>
          <p>19</p>
        </div>
      </div>
      <div className="dashcompanyprofile__strength">
        <h1>Profile Strength</h1>
        <Progress percent={100} showInfo={false} />
      </div>
      <div className="dashcompanyprofile__ratings">
        <h1>Reviews and Ratings</h1>
        <div className="dashcompanyprofile__review">
          <div className="dashcompanyprofile__icon-name">
            <span>
              <img src={company} alt="Reviewer" />
            </span>
            <p>William</p>
          </div>
          <div className="dashcompanyprofile__star">
            <StarRating isEditable={false} rating={2} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod
            sunt veniam alias fugiat accusantium. Maxime non iure odio velit,
            alias, ipsam aspernatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashCompanyProfile;
