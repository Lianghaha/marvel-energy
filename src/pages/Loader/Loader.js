import React, { useLayoutEffect } from "react"
import "./Loader.css"
import { gsap, Bounce, Power4 } from "gsap"
import { Logo } from "../../lib/components/Logo"

export const Loader = (props) => {
   const { setLoader } = props
   useLayoutEffect(() => {
      gsap
         .timeline()
         .from(".js-logo-left", {
            y: "-20vh",
            duration: 1,
            ease: Bounce.easeOut,
         })
         .from(
            ".js-logo-left",
            {
               opacity: 0,
               duration: 1,
            },
            "-=1"
         )
         .from(
            ".js-upper-line",
            {
               opacity: 0,
               y: "50px",
               duration: 0.3,
               ease: Power4.easeOut,
            },
            "-=0.2"
         )
         .from(".js-animated-letter", {
            opacity: 0,
            stagger: 0.15,
            y: "50px",
            duration: 0.3,
            ease: Power4.easeOut,
         })
         .from(".js-lower-line", {
            opacity: 0,
            y: "50px",
            duration: 0.3,
            ease: Power4.easeOut,
         })
         .to(
            ".js-logo-container",
            {
               scale: 0.01,
               duration: 0.3,
               opacity: 0,
               onComplete: setLoader,
               onCompleteParams: false,
            },
            "+=0.5"
         )
   }, [setLoader])
   return (
      <div className="loader">
         <Logo />
      </div>
   )
}
