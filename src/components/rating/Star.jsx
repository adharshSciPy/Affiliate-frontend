import { Star as StarIcon } from "@phosphor-icons/react";
import React from "react";

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <StarIcon
      weight={filled ? "fill" : "regular"}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        cursor: "pointer",
        color: filled ? "gold" : "gray",
        fontSize: "24px",
      }}
    />
  );
};

export default Star;

