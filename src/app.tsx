import { useState } from "react";
import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Background } from "./background";
export const App = () => {
    const [isMetalListShow, setisMetalListShow] = useState(false);
    const [isElectricalListShow, setisElectricalListShow] = useState(false);
    const handleClick = (type:string) => {
        if(type === "metal"){
            setisMetalListShow(!isMetalListShow);
            setisElectricalListShow(false);
        }
        if(type === "electrical"){
            setisElectricalListShow(!isElectricalListShow);
            setisMetalListShow(false);
        }
    }
  return (
    <>
      <header>
        <h1>NORCAL SURPLUS</h1>
        <h2>ELECTRICAL EQUIPMENT & METAL BUYERS</h2>
        <p>Buyers of all electrical materials, equipments and machinery.</p>
      </header>
      <div className="contact">
        <h3>
          Danny Yonko <strong>Buyers</strong>
        </h3>
        <h4>Cell : 408-210-3278</h4>
        <h4>
          Email :
          <a href="mailto:norcalsurplusbuyers@gmail.com">
            norcalsurplusbuyers@gmail.com
          </a>
        </h4>
      </div>
      <div className="list-materials">
        <button onClick={()=>{handleClick("electrical")}} className="btn-list btn btn-success col-4">
          <h3>Electrical</h3>
        </button>
        <div className={"list electrical " + (isElectricalListShow ? " active" : "")}>
          <ul>
            <li>Circuit</li>
            <li>Breakers</li>
            <li>Starters</li>
            <li>Contracters</li>
            <li>Fuses</li>
            <li>Panels</li>
            <li>Switchgear</li>
            <li>Transformers</li>
            <li>Square D</li>
            <li>Cuttlerhammer</li>
            <li>Westinghouse</li>
            <li>All Brands new</li>
            <li>Used and Obsolete</li>
          </ul>
        </div>
        <button onClick={()=>{handleClick("metal")}} className="btn-list btn btn-warning col-4">
          <h3>Metal</h3>
        </button>

        <div className={"list metal" + (isMetalListShow ? " active" : "")}>
          <ul>
            <li>Copper</li>
            <li>Brass</li>
            <li>Stainless</li>
            <li>Steel</li>
            <li>Carbide</li>
            <li>Forklift</li>
            <li>Steel</li>
            <li>Batteries</li>
            <li>Bronze</li>
            <li>All Types Off Alloys Electrical wire</li>
          </ul>
        </div>
      </div>

      <footer>
      <h1>NORCAL SURPLUS</h1>
      <h2>ELECTRICAL EQUIPMENT & METAL BUYERS</h2>
        <p>
          I buy electrical materials circuit breakers switch gears transformers
          and demolition.
        </p>

      </footer>
      <Background />
    </>
  );
};
