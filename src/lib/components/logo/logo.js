import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";

export const Logo = (props) => {
   const { setLoader } = props;
   return (
      <Link
         className="js-logo-container"
         to="/"
         onClick={() => (setLoader ? setLoader(true) : "")}
      >
         <div className="js-logo-left">
            <div className="logo-background">
               <p className="js-animated-letter">M</p>
               <p className="js-animated-letter">A</p>
               <p className="js-animated-letter">R</p>
               <p className="js-animated-letter">V</p>
               <p className="js-animated-letter">E</p>
               <p className="js-animated-letter">L</p>
            </div>
         </div>
         <div className="js-logo-right">
            <div className="js-upper-line line"></div>
            <div className="letters-container">
               <p className="js-animated-letter">E</p>
               <p className="js-animated-letter">N</p>
               <p className="js-animated-letter">E</p>
               <p className="js-animated-letter">R</p>
               <p className="js-animated-letter">G</p>
               <p className="js-animated-letter">Y</p>
            </div>
            <div className="js-lower-line line"></div>
         </div>
      </Link>
   );
};
