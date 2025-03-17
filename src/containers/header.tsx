
import "../styles/header.css";
import { Slider } from "../components/slider";
export const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>NORCAL SURPLUS</h1>
      </div>
      <div className="presentation-information col-10">
        <h2 className="">ELECTRICAL EQUIPMENT & METAL BUYERS</h2>
        <p>Buyers of all electrical materials, equipments and machinery.</p>
      </div>
      <div className="about-information">
        <Slider/>
        <p className="col-8">
          At Norcal Surplus, we specialize in purchasing surplus electrical
          materials and equipment, offering top cash payments to businesses and
          individuals across California and neighboring states. Our mission is
          to provide a seamless, efficient, and profitable solution for those
          looking to sell their excess electrical inventory.
        </p>
      </div>
    </header>
  );
};
