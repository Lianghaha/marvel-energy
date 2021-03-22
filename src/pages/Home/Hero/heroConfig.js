import thorImg from "../../../media/image/hero-Thor.png";
import novaImg from "../../../media/image/hero-Nova.png";
import magnetoImg from "../../../media/image/hero-Magneto.png";

const PRIV_KEY = "3c67f8b735de0e4e20a1798635bd0c5393e51876";
const PUBLIC_KEY = "12656036620a64d066126a719af51c2b";

const thorInfo = {
   id: 1009664,
   name: "Thor",
   slogan: "Thunder is the cleanest energy.",
   canDo:
      "All the power of the storm, from all the world , flows through my veins, and can be summoned by mine hammer at any time, wherever it is, to charge all the power plants on the planet earth.",
   image: thorImg,
};

const novaInfo = {
   id: 1009477,
   name: "Nova",
   slogan: "Utilizing solar power has never been easier.",
   canDo:
      "Solar panels are ridiculously inefficient. I can absorb energy from the sun and release it as gravimetric pulses and beams to wherever I want on the planet earth.",
   image: novaImg,
};

const magnetoInfo = {
   id: 1009417,
   name: "Magneto",
   slogan: "Perpetual motion machine is no longer hypothetical.",
   canDo:
      "All the magnetic fields in the universe will follow my order. I can create perpetual motion machines to satisfy all the needs of energy on the planet earth. Coal, petrol, diesel, and many more other fuels will finally be forgotten.",
   image: magnetoImg,
};

export { PRIV_KEY, PUBLIC_KEY, thorInfo, novaInfo, magnetoInfo };
