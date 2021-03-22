import React from "react";
import "./hero.css";
import { DonateButton } from "../../../lib/components/donateButton/donateButton";

export const Hero = (props) => {
   const { info = {}, data = [], imgLeft = true, setLoader } = props;

   const infoContainer = () => {
      return (
         <div className="info-container">
            <div className="donate-button-container js-hero-slide-in">
               <DonateButton setLoader={setLoader} />
            </div>
            <h1 className="hero-name js-hero-slide-in">
               {info.name ? info.name : ""}
            </h1>
            <div className="hero-slogan text-section">
               <h3 className="js-hero-slide-in">Slogan</h3>
               <p className="js-hero-slide-in">
                  {info.slogan ? info.slogan : ""}
               </p>
            </div>
            <div className="hero-super-power text-section">
               <h3 className="js-hero-slide-in">What I Can Do</h3>
               <p className="js-hero-slide-in">
                  {info.canDo ? info.canDo : ""}
               </p>
            </div>
            <div className="hero-events text-section">
               <h3 className="js-hero-slide-in">
                  More Events About Me
                  <span> (From Marvel API)</span>
               </h3>
            </div>
            <div className="js-events-container">
               {data
                  ? data.map((item) => {
                       return (
                          <a
                             href={item.detailUrl}
                             className="event-item"
                             key={item.detailUrl}
                          >
                             <img src={item.imgUrl} alt="event-img" />
                          </a>
                       );
                    })
                  : ""}
            </div>
         </div>
      );
   };

   const heroImgContainer = () => {
      return (
         <div className="hero-img-container">
            <img
               className="hero-img"
               src={info.image ? info.image : ""}
               alt="hero-img"
            />
         </div>
      );
   };

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
   );
};
