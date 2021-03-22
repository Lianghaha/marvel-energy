import thorImg from "../../../media/image/hero-Thor.png";
import novaImg from "../../../media/image/hero-Nova.png";
import magnetoImg from "../../../media/image/hero-Magneto.png";

const PRIV_KEY = "7b319d3d32369f9f371fb81fab74b64c38798d93";
const PUBLIC_KEY = "823224ced84111af4a558ea73868628b";

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
