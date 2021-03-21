import React from "react"
import "./Navbar.css"
import { Logo } from "../../../lib/components/Logo"
import tempLogo from "../../../media/image/temp-logo.jpg"

export const Navbar = () => {
   return (
      <div className="navbar">
         <div className="content">
            <Logo />
         </div>
      </div>
   )
}
