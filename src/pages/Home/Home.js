import React, {
   useLayoutEffect,
   useState,
   useCallback,
   useEffect,
} from "react";
import "./home.css";
import axios from "axios";
import md5 from "crypto-js/md5";
import { Navbar } from "./navbar/navbar";
import { Cover } from "./cover/cover";
import { coverAnimation } from "./cover/coverAnimation";
import { Hero } from "./hero/hero";
import * as hero from "./hero/heroConfig";
import { heroAnimation } from "./hero/heroAnimation";

export const Home = (props) => {
   const { setLoader } = props;

   const [thorData, setThorData] = useState(null);
   const [novaData, setNovaData] = useState(null);
   const [magnetoData, setMagnetoData] = useState(null);

   const getAPI = useCallback((characterID, setter) => {
      if (!characterID || !setter) {
         console.log(
            "Can't get API because 'characterID' or 'setter' is not valid"
         );
         return;
      }
      const imgSize = "/portrait_xlarge";
      let ts = new Date().getTime();
      let hash = md5(ts + hero.PRIV_KEY + hero.PUBLIC_KEY).toString();
      axios
         .get(
            `https://gateway.marvel.com:443/v1/public/characters/${characterID}/events?ts=${ts}&apikey=${hero.PUBLIC_KEY}&hash=${hash}&limit=4`
         )
         .then((response) => {
            let result = [];
            let events = response.data.data.results;
            for (let i = 0; i < events.length; i++) {
               let imgAddress =
                  events[i].thumbnail.path +
                  imgSize +
                  "." +
                  events[i].thumbnail.extension;
               result.push({
                  imgUrl: imgAddress,
                  detailUrl: events[i].urls[0].url,
               });
            }
            setter(result);
         })
         .catch((err) => console.log(err));
   }, []);

   // Get data from API
   useEffect(() => {
      getAPI(hero.thorInfo.id, setThorData);
      getAPI(hero.novaInfo.id, setNovaData);
      getAPI(hero.magnetoInfo.id, setMagnetoData);
   }, [getAPI]);

   // Animation
   useLayoutEffect(() => {
      coverAnimation();
      heroAnimation();
   }, []);

   return (
      <div className="home">
         <Navbar setLoader={setLoader} />
         <Cover setLoader={setLoader} />
         <div className="hero-1">
            <Hero
               data={thorData}
               info={hero.thorInfo}
               imgLeft={false}
               setLoader={setLoader}
            />
         </div>
         <div className="hero-2">
            <Hero
               data={novaData}
               info={hero.novaInfo}
               imgLeft={true}
               setLoader={setLoader}
            />
         </div>
         <div className="hero-3">
            <Hero
               data={magnetoData}
               info={hero.magnetoInfo}
               imgLeft={false}
               setLoader={setLoader}
            />
         </div>
      </div>
   );
};
