import React from "react"
import "./Hero3.css"
import heroMagneto from "../../../../media/image/hero-Magneto.png"

export const Hero3 = (props) => {
   const { magnetoData } = props

   return (
      <div className="hero hero-3">
         <div className="content">
            <div className="left-section">
               <div className="info-container">
                  {/* <div className="name-and-button text-section"> */}
                  <div className="donate-button js-hero-left-slide-in">
                     <p>DONATE</p>
                  </div>
                  <h1 className="hero-name js-hero-left-slide-in">Magneto</h1>
                  {/* </div> */}
                  <div className="hero-slogan text-section">
                     <h3 className="js-hero-left-slide-in">Slogan</h3>
                     <p className="js-hero-left-slide-in">
                        Perpetual motion machine is no longer hypothetical.
                     </p>
                  </div>
                  <div className="hero-super-power text-section">
                     <h3 className="js-hero-left-slide-in">What I Can Do</h3>
                     <p className="js-hero-left-slide-in">
                        All the magnetic fields in the universe will follow my
                        order. I can create perpetual motion machines to satisfy
                        all the needs of energy on the planet earth. Coal,
                        petrol, diesel, and many more other fuels will finally
                        be forgotten.
                     </p>
                  </div>
                  <div className="hero-events text-section">
                     <h3 className="js-hero-left-slide-in">
                        More Events About Me{" "}
                        <span>(From Marvel API, Images Clickable)</span>
                     </h3>
                     <div className="js-events-container">
                        {magnetoData
                           ? magnetoData.map((item) => {
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
            <div className="right-section">
               <div className="hero-img-container">
                  <img src={heroMagneto} alt="Magneto" />
               </div>
            </div>
         </div>
      </div>
   )
}
