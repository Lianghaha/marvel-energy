import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const heroAnimation = () => {
   for (let i = 1; i < 4; i++) {
      gsap
         .timeline({
            scrollTrigger: {
               trigger: `.hero-${i} .info-container`,
               start: "-20px 50%",
               // markers: true,
            },
         })
         .from(`.hero-${i} .info-container .js-hero-slide-in`, {
            stagger: 0.2,
            marginLeft: "-500px",
            duration: 0.7,
            opacity: 0,
            ease: Power3.easeOut,
         })
         .from(
            `.hero-${i} .js-events-container`,
            {
               // scrollTrigger: {
               //    trigger: ".hero-1 .js-events-container",
               //    start: "-460px 50%",
               //    // markers: true,
               // },
               y: "100px",
               duration: 1,
               opacity: 0,
               ease: Power3.easeOut,
            },
            "-=0.5"
         )

      gsap.from(`.hero-${i} .hero-img-container`, {
         scrollTrigger: {
            trigger: `.hero-${i} .hero-img-container`,
            start: "5% 50%",
            // markers: true,
         },
         duration: 1,
         opacity: 0,
         x: "-500px",
         ease: Power3.easeOut,
      })
   }
}

export { heroAnimation }
