import { Slider } from "../components/slider";
import Title from "../components/title";
import "../styles/header.css";
export const Header = () => {
  return (
    <header>
      <Title />
      <div className="presentation-information col-10">
        <h2 className="">ELECTRICAL EQUIPMENT & METAL BUYERS</h2>
        <Slider />
        <p>Buyers of all electrical materials, equipments and machinery.</p>
      </div>
    </header>
  );
};
