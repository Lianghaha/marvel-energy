import React, { useLayoutEffect } from "react";
import "./loader.css";
import { gsap, Power4 } from "gsap";
import { Logo } from "../../lib/components/logo/logo";

export const Loader = (props) => {
   const { setLoader } = props;
   useLayoutEffect(() => {
      gsap
         .timeline()
         .from(".js-logo-left .js-animated-letter", {
            opacity: 0,
            stagger: 0.1,
            y: "-50px",
            duration: 0.3,
            ease: Power4.easeOut,
         })
         .from(
            ".js-logo-right .js-animated-letter",
            {
               opacity: 0,
               stagger: 0.1,
               y: "50px",
               duration: 0.3,
               ease: Power4.easeOut,
            },
            "-=0.2"
         )
         .from(".line", {
            opacity: 0,
            stagger: 0.2,
            x: "50px",
            duration: 0.3,
            ease: Power4.easeOut,
         })
         .from(
            ".js-logo-right .js-animated-letter",
            {
               color: "white",
               stagger: {
                  from: "end",
                  amount: 0.3,
               },
               duration: 1.2,
               ease: Power4.easeOut,
            },
            "-=0.3"
         )
         .from(
            ".logo-background",
            {
               backgroundColor: "transparent",
               duration: 1,
               ease: Power4.easeOut,
            },
            "-=1"
         )
         .to(
            ".js-logo-container",
            {
               scale: 0.01,
               duration: 0.3,
               opacity: 0,
               onComplete: setLoader,
               onCompleteParams: false,
            },
            "-=0.5"
         );
   }, [setLoader]);
   return (
      <div className="loader">
         <Logo />
      </div>
   );
};
