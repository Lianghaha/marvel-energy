import React from "react"
import "./Hero.css"

export const Hero = (props) => {
   const { info, data, imgLeft } = props

   const infoContainer = () => {
      return (
         <div className="info-container">
            <div className="donate-button js-hero-slide-in">
               <p>DONATE</p>
            </div>
            <h1 className="hero-name js-hero-slide-in">
               {info ? info.name : ""}
            </h1>
            <div className="hero-slogan text-section">
               <h3 className="js-hero-slide-in">Slogan</h3>
               <p className="js-hero-slide-in">{info ? info.slogan : ""}</p>
            </div>
            <div className="hero-super-power text-section">
               <h3 className="js-hero-slide-in">What I Can Do</h3>
               <p className="js-hero-slide-in">{info ? info.canDo : ""}</p>
            </div>
            <div className="hero-events text-section">
               <h3 className="js-hero-slide-in">
                  More Events About Me
                  <span>(From Marvel API, Images Clickable)</span>
               </h3>
            </div>
            <div className="js-events-container">
               {data
                  ? data.map((item) => {
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
      )
   }

   const heroImgContainer = () => {
      return (
         <div className="hero-img-container">
            <img src={info.image ? info.image : ""} alt="hero-img" />
         </div>
      )
   }

   return (
      <div className="hero">
         <div className="content">
            <div className="left-section">
               {imgLeft ? heroImgContainer() : infoContainer()}
            </div>
            <div className="right-section">
               {imgLeft ? infoContainer() : heroImgContainer()}
            </div>
         </div>
      </div>
   )
}
