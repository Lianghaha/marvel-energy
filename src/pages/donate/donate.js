import React, { useLayoutEffect, useState } from "react";
import "./donate.css";
import thankImg1 from "../../media/image/thank-1.png";
import { DonateButton } from "../../lib/components/donateButton/donateButton";
import { Logo } from "../../lib/components/logo/logo";
import { gsap, Power3 } from "gsap";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const Donate = (props) => {
   const { setLoader } = props;
   const [amount, setAmount] = useState(0);
   // Animation
   useLayoutEffect(() => {
      gsap
         .timeline()
         .from(".js-scale-up", {
            opacity: 0,
            stagger: 0.3,
            scale: 0.01,
            duration: 0.5,
            ease: Power3.easeOut,
         })

         .from(
            ".js-slide-up",
            {
               opacity: 0,
               stagger: 0.15,
               scale: 0.01,
               x: -200,
               y: 200,
               duration: 0.5,
               ease: Power3.easeOut,
            },
            "-=0.3"
         )
         .from(
            ".App",
            {
               backgroundColor: "#000000",
               duration: 0.1,
            },
            "-=0.3"
         );
   }, []);

   return (
      <div className="donate">
         <div className="content">
            <div className="section-container">
               <div className="thank-section">
                  <div className="logo-container thank-row js-scale-up">
                     <Logo setLoader={setLoader} />
                  </div>
                  <div className="thank-img-container thank-row js-scale-up">
                     <img src={thankImg1} alt="thank" />
                  </div>
               </div>
               <div className="buton"></div>
               <div className="form-section">
                  <div className="form-container">
                     <div className="name-email form-row">
                        <input
                           type="input"
                           className="input-name js-slide-up"
                           placeholder="Name"
                        />
                        <input
                           type="input"
                           className="input-email js-slide-up"
                           placeholder="Email"
                        />
                     </div>
                     <div className="card-csc form-row">
                        <input
                           type="input"
                           className="input-card js-slide-up"
                           placeholder="Credit Card Number"
                        />
                        <input
                           type="input"
                           className="input-csc js-slide-up"
                           placeholder="CSC"
                        />
                     </div>
                     <div className="amount form-row">
                        <div
                           className={
                              amount === 5
                                 ? "amount-box active js-slide-up"
                                 : "amount-box js-slide-up"
                           }
                           onClick={() => setAmount(5)}
                        >
                           <p>$5</p>
                        </div>
                        <div
                           className={
                              amount === 20
                                 ? "amount-box active js-slide-up"
                                 : "amount-box js-slide-up"
                           }
                           onClick={() => setAmount(20)}
                        >
                           <p>$20</p>
                        </div>
                        <div
                           className={
                              amount === 50
                                 ? "amount-box active js-slide-up"
                                 : "amount-box js-slide-up"
                           }
                           onClick={() => setAmount(50)}
                        >
                           <p>$50</p>
                        </div>
                        <div
                           className={
                              amount === 100
                                 ? "amount-box active js-slide-up"
                                 : "amount-box js-slide-up"
                           }
                           onClick={() => setAmount(100)}
                        >
                           <p>$100</p>
                        </div>
                     </div>
                     <div className="comment form-row">
                        <textarea
                           className="input-comment js-slide-up"
                           placeholder="Send Us A Message!"
                        ></textarea>
                     </div>
                     <div className="button-container form-row js-slide-up">
                        <Link
                           className="back-icon-container"
                           to="/"
                           onClick={() => (setLoader ? setLoader(true) : "")}
                        >
                           <IoMdArrowRoundBack />
                        </Link>
                        <DonateButton text="Thank You!" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
