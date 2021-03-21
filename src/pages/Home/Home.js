import React, { useLayoutEffect, useState, useCallback, useEffect } from "react"
import "./Home.css"
import "./components/Heros/HeroCommon.css"
import axios from "axios"
import md5 from "crypto-js/md5"
import { gsap, Elastic, Bounce, Power4, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Cover } from "./components/Cover"
import { Navbar } from "./components/Navbar"
import { Hero1 } from "./components/Heros/Hero1"
import { Hero2 } from "./components/Heros/Hero2"
import { Hero3 } from "./components/Heros/Hero3"

gsap.registerPlugin(ScrollTrigger)
export const Home = (props) => {
   // const { setLoader } = props

   const [thorData, setThorData] = useState(null)
   const [novaData, setNovaData] = useState(null)
   const [magnetoData, setMagnetoData] = useState(null)

   const PRIV_KEY = "7b319d3d32369f9f371fb81fab74b64c38798d93"
   const PUBLIC_KEY = "823224ced84111af4a558ea73868628b"
   const thorID = 1009664
   const magnetoID = 1009417
   const novaID = 1009477

   const getAPI = useCallback((characterID, setter) => {
      const imgSize = "/portrait_xlarge"
      let ts = new Date().getTime()
      let hash = md5(ts + PRIV_KEY + PUBLIC_KEY).toString()
      axios
         .get(
            `https://gateway.marvel.com:443/v1/public/characters/${characterID}/events?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=6`
         )
         .then((response) => {
            let result = []
            let events = response.data.data.results
            for (let i = 0; i < events.length; i++) {
               let imgAddress =
                  events[i].thumbnail.path +
                  imgSize +
                  "." +
                  events[i].thumbnail.extension
               result.push([imgAddress, events[i].urls[0].url])
            }
            setter(result)
         })
         .catch((err) => console.log(err))
   }, [])

   // Get data from API
   useLayoutEffect(() => {
      getAPI(thorID, setThorData)
      getAPI(novaID, setNovaData)
      // getAPI(magnetoID, setMagnetoData)
   }, [getAPI])

   // Animation
   useLayoutEffect(() => {
      // Page Start Animation
      // gsap
      //    .timeline()
      //    .from(".js-logo-container", {
      //       opacity: 0,
      //       scale: 0.01,
      //       duration: 0.5,
      //    })
      //    .from(
      //       ".js-hero-left",
      //       {
      //          opacity: 0,
      //          duration: 1,
      //          marginBottom: "-80px",
      //          marginLeft: "80px",
      //          ease: Power3.easeOut,
      //       },
      //       "-=0"
      //    )
      //    .from(
      //       ".js-hero-right",
      //       {
      //          opacity: 0,
      //          duration: 1,
      //          marginBottom: "-80px",
      //          marginLeft: "-80px",
      //          ease: Power3.easeOut,
      //       },
      //       "-=0.5"
      //    )
      //    .from(
      //       ".js-hero-middle",
      //       {
      //          opacity: 0,
      //          duration: 1,
      //          marginBottom: "-80px",
      //          ease: Power3.easeOut,
      //       },
      //       "-=0.5"
      //    )
      //    .from(
      //       ".js-slogan-slide-up",
      //       {
      //          opacity: 0,
      //          stagger: 0.2,
      //          duration: 0.8,
      //          y: "30px",
      //          ease: Power3.easeOut,
      //       },
      //       "-=0.3"
      //    )
      //    .from(
      //       ".js-scroll-icon",
      //       {
      //          opacity: 0,
      //          duration: 0.8,
      //          marginTop: "-160px",
      //          ease: Bounce.easeOut,
      //       },
      //       "-=0.3"
      //    )

      // Scroll Animation
      // Hero-1
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".hero-1 .left-section",
               start: "-50px 50%",
               markers: true,
            },
         })
         .from(".hero-1 .js-hero-left-slide-in", {
            stagger: 0.2,
            marginLeft: "-500px",
            duration: 100,
            opacity: 0,
            ease: Power3.easeOut,
         })
         .from(
            ".hero-1 .js-events-container",
            {
               // scrollTrigger: {
               //    trigger: ".hero-1 .js-events-container",
               //    start: "-460px 50%",
               //    // markers: true,
               // },
               y: "100px",
               duration: 100,
               opacity: 0,
               ease: Power3.easeOut,
            },
            "-=0.3"
         )

      gsap.from(".hero-1 .right-section", {
         scrollTrigger: {
            trigger: ".hero-1 .right-section",
            start: "-50px 50%",
            markers: true,
         },
         duration: 100,
         opacity: 0,
         x: "500px",
         ease: Power3.easeOut,
      })

      // Hero-2
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".hero-2 .right-section",
               start: "10% 50%",
               markers: true,
            },
         })
         .from(".hero-2 .js-hero-right-slide-in", {
            stagger: 0.2,
            marginLeft: "500px",
            duration: 50,
            opacity: 0,
            ease: Power3.easeOut,
         })
         .from(
            ".hero-2 .js-events-container",
            {
               // scrollTrigger: {
               //    trigger: ".hero-2 .js-events-container",
               //    start: "-460px 50%",
               //    // markers: true,
               // },
               x: "100px",
               duration: 50,
               opacity: 0,
               ease: Power3.easeOut,
            },
            "-=0.3"
         )
      gsap.from(".hero-2 .left-section", {
         scrollTrigger: {
            trigger: ".hero-2 .left-section",
            start: "10% 50%",
            markers: true,
         },
         duration: 50,
         opacity: 0,
         x: "-500px",
         ease: Power3.easeOut,
      })

      // Hero-3
      gsap
         .timeline({
            scrollTrigger: {
               trigger: ".hero-3 .left-section",
               start: "-100px 50%",
               markers: true,
            },
         })
         .from(".hero-3 .js-hero-left-slide-in", {
            stagger: 0.2,
            marginLeft: "-500px",
            duration: 1,
            opacity: 0,
            ease: Power3.easeOut,
         })
         .from(
            ".hero-3 .js-events-container",
            {
               // scrollTrigger: {
               //    trigger: ".hero-3 .js-events-container",
               //    start: "-460px 50%",
               //    // markers: true,
               // },
               y: "100px",
               duration: 1,
               opacity: 0,
               ease: Power3.easeOut,
            },
            "-=0.3"
         )
      gsap.from(".hero-3 .right-section", {
         scrollTrigger: {
            trigger: ".hero-3 .right-section",
            start: "-100px 50%",
            markers: true,
         },
         duration: 2,
         opacity: 0,
         x: "500px",
         ease: Power3.easeOut,
      })
   }, [])

   return (
      <div className="home">
         <Navbar />
         <Cover />
         <Hero1 thorData={thorData} />
         <Hero2 novaData={novaData} />
         {/* <Hero3 magnetoData={magnetoData} /> */}
      </div>
   )
}
