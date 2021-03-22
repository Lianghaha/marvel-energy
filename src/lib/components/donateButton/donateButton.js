import React from "react";
import "./donateButton.css";
import { Link } from "react-router-dom";

export const DonateButton = (props) => {
   const { setLoader, text = "DONATE" } = props;
   return (
      <Link
         className="donate-button"
         to="/donate"
         onClick={() => (setLoader ? setLoader(true) : "")}
      >
         <p>{text}</p>
      </Link>
   );
};
