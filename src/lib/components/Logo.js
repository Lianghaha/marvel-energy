import React from "react"
import "./Logo.css"

export const Logo = () => {
   return (
      <div className="js-logo-container">
         <div className="js-logo-left">
            <p>MARVEL</p>
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
      </div>
   )
}
