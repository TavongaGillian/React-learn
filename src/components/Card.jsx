import React from "react";

export const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} rounded-lg p-5 shadow-md`}>{children}</div>;
};

// export default Card
