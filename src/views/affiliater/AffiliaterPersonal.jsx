import { Button } from "antd";
import React from "react";

function AffiliaterPersonal() {
  return (
    <div className="affiliaterpersonal">
      <div className="affiliaterpersonal__content">
        <div className="affiliaterpersonal__content--left">
          <p>First Name</p>
          <input type="text" />
        </div>
        <div className="affiliaterpersonal__content--right">
          <p>Last Name</p>
          <input type="text" />
        </div>
      </div>
      <div className="affiliaterpersonal__content">
        <div className="affiliaterpersonal__content--left">
          <p>Date of Birth</p>
          <input type="text" />
        </div>
        <div className="affiliaterpersonal__content--right">
          <p>Phone Number</p>
          <input type="text" />
        </div>
      </div>
      <div className="affiliaterpersonal__content">
        <div className="affiliaterpersonal__content--left">
          <p>Gender</p>
          <input type="text" />
        </div>
        <div className="affiliaterpersonal__content--right">
          <p>Email Address</p>
          <input type="text" />
        </div>
      </div>
      <div className="affiliaterpersonal__content">
        <div className="affiliaterpersonal__content--left">
          <p>Nationality</p>
          <input type="text" />
        </div>
        <div className="affiliaterpersonal__content--right">
          <p>Portfolio</p>
          <input type="text" />
        </div>
      </div>
      <div className="affiliaterpersonal__content">
        <div className="affiliaterpersonal__content--left">
          <p>Address</p>
          <textarea name="" id=""></textarea>
        </div>
      </div>
      <div className="affiliaterpersonal__button">
        <Button>next</Button>
      </div>
    </div>
  );
}

export default AffiliaterPersonal;
