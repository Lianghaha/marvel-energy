import React from "react"
import "./Hero1.css"
import heroThor from "../../../../media/image/hero-Thor.png"

export const Hero1 = (props) => {
   const { thorData } = props
   return (
      <div className="hero hero-1">
         <div className="content">
            <div className="left-section">
               <div className="info-container">
                  {/* <div className="name-and-button"> */}
                  <div className="donate-button js-hero-left-slide-in">
                     <p>DONATE</p>
                  </div>
                  <h1 className="hero-name js-hero-left-slide-in">Thor</h1>
                  {/* </div> */}

                  <div className="hero-slogan text-section">
                     <h3 className="js-hero-left-slide-in">Slogan</h3>
                     <p className="js-hero-left-slide-in">
                        Thunder is the cleanest energy.
                     </p>
                  </div>
                  <div className="hero-super-power text-section">
                     <h3 className="js-hero-left-slide-in">What I Can Do</h3>
                     <p className="js-hero-left-slide-in">
                        All the power of the storm, from all the world , flows
                        through my veins, and can be summoned by mine hammer at
                        any time, wherever it is, to charge all the power plants
                        on the planet earth.
                     </p>
                  </div>
                  <div className="hero-events text-section">
                     <h3 className="js-hero-left-slide-in">
                        More Events About Me <span>(From Marvel API, Images Clickable)</span>
                     </h3>
                     <div className="js-events-container">
                        {thorData
                           ? thorData.map((item) => {
                                return (
                                   <a
                                      href={item[1]}
                                      className="event-item"
                                      key={item[0]}
                                   >
                                      <img src={item[0]} alt="event-img" />
                                   </a>
                                )
                             })
                           : ""}
                     </div>
                  </div>
               </div>
               <div className="buttons-container"></div>
            </div>
            <div className="right-section">
               <div className="hero-img-container js-hero-right-slide-in">
                  <img src={heroThor} alt="Thor" />
               </div>
            </div>
         </div>
      </div>
   )
}
