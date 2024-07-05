import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ isEditable, rating }) => {
  const [rate, setRate] = useState(rating);

  const handleClick = (index) => {
    setRate(index);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          filled={index <= rate}
          onClick={() => isEditable && handleClick(index)}
        />
      ))}
      <p
        style={{
          marginTop: "5px",
        }}
      >
        Rating: {rate}
      </p>
    </div>
  );
};

export default StarRating;
