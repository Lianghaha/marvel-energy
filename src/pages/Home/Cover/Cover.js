import React from "react";
import "./cover.css";
import heroMagneto from "../../../media/image/hero-Magneto.png";
import heroThor from "../../../media/image/hero-Thor.png";
import heroNova from "../../../media/image/hero-Nova.png";
import thankImg from "../../../media/image/thank-2.png";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { DonateButton } from "../../../lib/components/donateButton/donateButton";

export const Cover = (props) => {
   const { setLoader } = props;
   return (
      <div className="cover">
         <div className="content">
            <div className="heros-img">
               <div className="thank-container">
                  <img src={thankImg} alt="thank" />
               </div>
               <div className="js-hero-left hero-container">
                  <img src={heroMagneto} alt="Magneto" />
               </div>
               <div className="js-hero-middle hero-container">
                  <img src={heroThor} alt="Thor" />
               </div>
               <div className="js-hero-right hero-container">
                  <img src={heroNova} alt="Nova" />
               </div>
               <div className="js-slogan">
                  <div className="slogan-text-section">
                     <div className="slogan-text-container">
                        <h1 className="js-slogan-slide-up cover-text">
                           super
                           <span className="delete">Power</span>
                           <span className="energy">Energy</span>
                        </h1>
                        <h3 className="js-slogan-slide-up cover-text">
                           Super-powers can generate endless clean energy.
                        </h3>
                        <p className="js-slogan-slide-up cover-text">
                           We need your donation. Let's start a campaign to
                           legalize super-powers and fight the greenhouse
                           effect!
                        </p>
                     </div>
                  </div>
                  <div className="slogan-under-cover">
                     <DonateButton setLoader={setLoader} text="HELP US !" />
                  </div>
                  <div className="scroll-icon-container">
                     <div
                        className="js-scroll-icon"
                        onClick={() => {
                           window.scroll({
                              top: window.innerHeight,
                              left: 0,
                              behavior: "smooth",
                           });
                        }}
                     >
                        <AiOutlineThunderbolt />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
