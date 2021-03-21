import React from "react"
import "./Hero2.css"
import heroNova from "../../../../media/image/hero-Nova.png"

export const Hero2 = (props) => {
   const { novaData } = props

   return (
      <div className="hero hero-2">
         <div className="content">
            <div className="left-section">
               <div className="hero-img-container">
                  <img src={heroNova} alt="Nova" />
               </div>
            </div>
            <div className="right-section">
               <div className="info-container">
                  {/* <div className="name-and-button text-section"> */}
                  <div className="donate-button js-hero-right-slide-in">
                     <p>DONATE</p>
                  </div>
                  <h1 className="hero-name js-hero-right-slide-in">Nova</h1>
                  {/* </div> */}
                  <div className="hero-slogan text-section">
                     <h3 className="js-hero-right-slide-in">Slogan</h3>
                     <p className="js-hero-right-slide-in">
                        Utilizing solar power has never been easier.
                     </p>
                  </div>
                  <div className="hero-super-power text-section">
                     <h3 className="js-hero-right-slide-in">What I Can Do</h3>
                     <p className="js-hero-right-slide-in">
                        Solar panels are ridiculously inefficient. I can absorb
                        energy from the sun and release it as gravimetric pulses
                        and beams to wherever I want on the planet earth.
                     </p>
                  </div>
                  <div className="hero-events text-section">
                     <h3 className="js-hero-right-slide-in">
                        More Events About Me <span>(From Marvel API, Images Clickable)</span>
                     </h3>
                     <div className="js-events-container">
                        {novaData
                           ? novaData.map((item) => {
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
            </div>
         </div>
      </div>
   )
}
