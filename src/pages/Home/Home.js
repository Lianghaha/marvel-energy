import React, { useLayoutEffect, useState, useCallback, useEffect } from "react"
import "./Home.css"
import axios from "axios"
import md5 from "crypto-js/md5"
import { Navbar } from "./components/Navbar"
import { Cover } from "./components/Cover"
import { coverAnimation } from "./components/coverAnimation"
import { Hero } from "./components/Heros/Hero"
import * as hero from "./components/Heros/heroConfig"
import { heroAnimation } from "./components/Heros/heroAnimation"

export const Home = (props) => {
   // const { setLoader } = props

   const testData = () => {
      let result = []
      for (let i = 0; i < 6; i++) {
         result.push([
            "http://i.annihil.us/u/prod/marvel/i/mg/9/40/51ca10d996b8b/portrait_xlarge.jpg",
            "http://marvel.com/comics/events/116/acts_of_vengeance?utm_campaign=apiRef&utm_source=823224ced84111af4a558ea73868628b",
         ])
      }
      return result
   }

   const [thorData, setThorData] = useState(null)
   const [novaData, setNovaData] = useState(null)
   const [magnetoData, setMagnetoData] = useState(null)

   const getAPI = useCallback((characterID, setter) => {
      const imgSize = "/portrait_xlarge"
      let ts = new Date().getTime()
      let hash = md5(ts + hero.PRIV_KEY + hero.PUBLIC_KEY).toString()
      axios
         .get(
            `https://gateway.marvel.com:443/v1/public/characters/${characterID}/events?ts=${ts}&apikey=${hero.PUBLIC_KEY}&hash=${hash}&limit=6`
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
      // getAPI(thorID, setThorData)
      // getAPI(novaID, setNovaData)
      // getAPI(magnetoID, setMagnetoData)
   }, [getAPI])

   // Animation
   useLayoutEffect(() => {
      coverAnimation()
      heroAnimation()
   }, [])

   return (
      <div className="home">
         <Navbar />
         <Cover />
         <div className="hero-1">
            <Hero data={testData()} info={hero.thorInfo} imgLeft={false} />
         </div>
         <div className="hero-2">
            <Hero data={testData()} info={hero.thorInfo} imgLeft={true} />
         </div>
         <div className="hero-3">
            <Hero data={testData()} info={hero.thorInfo} imgLeft={false} />
         </div>
      </div>
   )
}
