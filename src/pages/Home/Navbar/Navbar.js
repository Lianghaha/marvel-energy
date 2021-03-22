import React from "react";
import "./navbar.css";
import { Logo } from "../../../lib/components/logo/logo";

export const Navbar = (props) => {
   const { setLoader } = props;
   return (
      <div className="navbar">
         <div className="content">
            <Logo setLoader={setLoader} />
         </div>
      </div>
   );
};
