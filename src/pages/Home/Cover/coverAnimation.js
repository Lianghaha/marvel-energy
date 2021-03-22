import { gsap, Bounce, Power3 } from "gsap";

const hoverIn = () => {
   gsap.to(".hero-container", {
      opacity: 0,
      duration: 0.5,
   });
   gsap.to(".thank-container", {
      opacity: 1,
      duration: 0.5,
   });
};

const hoverOut = () => {
   gsap.to(".hero-container", {
      opacity: 1,
      duration: 0.5,
   });
   gsap.to(".thank-container", {
      opacity: 0,
      duration: 0.5,
   });
};

const coverAnimation = () => {
   const coverDonateButton = document.querySelector(".cover .donate-button");
   coverDonateButton.addEventListener("mouseover", hoverIn);
   coverDonateButton.addEventListener("mouseleave", hoverOut);

   gsap
      .timeline()
      .from(".js-logo-container", {
         opacity: 0,
         scale: 0.01,
         duration: 0.5,
      })
      .from(".js-slogan", {
         opacity: 0,
         duration: 0.5,
      })
      .from(
         ".js-hero-left",
         {
            opacity: 0,
            duration: 0.8,
            marginBottom: "-80px",
            marginLeft: "80px",
            ease: Power3.easeOut,
         },
         "-=0.3"
      )
      .from(
         ".js-hero-right",
         {
            opacity: 0,
            duration: 0.8,
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
            duration: 0.8,
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
            duration: 0.6,
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
         "-=0.5"
      )
      .from(
         ".App",
         {
            backgroundColor: "#000000",
            duration: 0.1,
         },
         "-=0.3"
      );
};

export { coverAnimation };
