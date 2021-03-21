import { gsap, Elastic, Bounce, Power4, Power3 } from "gsap"

const coverAnimation = () => {
   gsap
      .timeline()
      .from(".js-logo-container", {
         opacity: 0,
         scale: 0.01,
         duration: 0.5,
      })
      .from(
         ".js-hero-left",
         {
            opacity: 0,
            duration: 1,
            marginBottom: "-80px",
            marginLeft: "80px",
            ease: Power3.easeOut,
         },
         "-=0"
      )
      .from(
         ".js-hero-right",
         {
            opacity: 0,
            duration: 1,
            marginBottom: "-80px",
            marginLeft: "-80px",
            ease: Power3.easeOut,
         },
         "-=0.5"
      )
      .from(
         ".js-hero-middle",
         {
            opacity: 0,
            duration: 1,
            marginBottom: "-80px",
            ease: Power3.easeOut,
         },
         "-=0.5"
      )
      .from(
         ".js-slogan-slide-up",
         {
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            y: "30px",
            ease: Power3.easeOut,
         },
         "-=0.3"
      )
      .from(
         ".js-scroll-icon",
         {
            opacity: 0,
            duration: 0.8,
            marginTop: "-160px",
            ease: Bounce.easeOut,
         },
         "-=0.3"
      )
}

export { coverAnimation }
