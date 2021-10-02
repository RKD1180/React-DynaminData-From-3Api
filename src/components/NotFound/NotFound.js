import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry No page Found Go Back To Home</h2>
      <Link to="/food">Back Home</Link>
    </div>
  );
};

export default NotFound;
