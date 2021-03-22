import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loader } from "./pages/loader/loader";
import { Home } from "./pages/home/home";
import { Donate } from "./pages/donate/donate";
import backgroundVideo from "./media/video/background-video.mp4";

function App() {
   const [loader, setLoader] = useState(true);
   return (
      <Router>
         <video className="videoTag" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
         </video>
         <div className="App">
            {loader ? (
               <Loader setLoader={setLoader} />
            ) : (
               <Switch>
                  <Route
                     path="/donate"
                     exact
                     render={() => <Donate setLoader={setLoader} />}
                  />
                  <Route
                     path="/"
                     render={() => <Home setLoader={setLoader} />}
                  />
               </Switch>
            )}
         </div>
      </Router>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
