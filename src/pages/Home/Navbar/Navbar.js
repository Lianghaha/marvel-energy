import React from "react"
import "./Navbar.css"
import { Logo } from "../../../lib/components/Logo"

export const Navbar = () => {
   return (
      <div className="navbar">
         <div className="content">
            <Logo />
         </div>
      </div>
   )
}
