import React from "react";
import clientImg from "../../assets/landing-page/client-affiliate.svg";

import { Button } from "antd";

const Bussiness = () => {
  return (
    <div className="bussiness">
      <div className="bussiness__body">
        <div className="bussiness__img">
          <img src={clientImg} alt="client illustration" />
        </div>

        <div className="bussiness__content">
          <h2>
            Get more Business through our <br /> Platform
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia unde
            eveniet animi. Deserunt incidunt nesciunt sunt aperiam, dolores
            harum iusto vitae alias, perspiciatis possimus animi sed fugit est,
            sequi et Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique quam voluptas, quasi reprehenderit architecto id maiores
            quo ducimus provident, possimus quibusdam! Assumenda distinctio
            ipsam vero corrupti illum quas corporis officiis. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Iusto perferendis beatae
            aliquam soluta odit ut minus mollitia provident nostrum
            necessitatibus eaque earum laboriosam est optio architecto, error id
            exercitationem quibusdam!
          </p>
          <div className="bussiness__button">
            <Button type="primary" size="large">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
