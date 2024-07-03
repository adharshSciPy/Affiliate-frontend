import React from "react";
import Logo from "../../assets/client-icons/Logo.svg";
import Logo1 from "../../assets/client-icons/Logo-1.svg";
import Logo2 from "../../assets/client-icons/Logo-2.svg";
import Logo3 from "../../assets/client-icons/Logo-3.svg";
import Logo4 from "../../assets/client-icons/Logo-4.svg";
import Logo5 from "../../assets/client-icons/Logo-5.svg";
import customerImg2 from "../../assets/landing-page/customer-2.svg";
import { ArrowRight } from "@phosphor-icons/react";

const Testimonal = () => {
  const logos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5];
  return (
    <div className="testimonal">
      <div className="testimonal__body">
        <div
          style={{ backgroundImage: `url(${customerImg2}` }}
          className="testimonal__img"
        ></div>
        <div className="testimonal__content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptas, qui iste unde dignissimos a illum cupiditate esse, odio
            ipsa tenetur in distinctio voluptatem aperiam quo rerum repudiandae.
            Inventore, sunt?Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Fugit voluptatibus, libero animi reiciendis similique aliquid,
            dolorem dolor ducimus numquam vitae praesentium ab consequatur
            voluptate maxime error quaerat repellendus dolore aspernatur Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsum
            iste beatae consequuntur labore. Fugiat, velit? Ad tenetur odit
            culpa odio, ab repellat sint minima magni commodi. Deleniti, fugit
            sapiente.
          </p>
          <h1>Tim Smith</h1>
          <p>British Dragon Boat Racing Association </p>

          <div className="testimonal__bottom">
            <div className="testimonal__logos">
              {logos.map((logo, index) => {
                return (
                  <div className="testimonal__logo">
                    <img src={logo} key={index} alt="logo" />
                  </div>
                );
              })}
            </div>
            <div className="testimonal__right">
              <p>
                {" "}
                <a href="#">
                  Meet all customer's <ArrowRight size={15} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
