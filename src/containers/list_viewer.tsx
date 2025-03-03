import { useState } from "react";
import { List } from "../components/list";
import "../styles/list-viewer.css";
export const List_viewer = () => {
  const [isMetalListShow, setisMetalListShow] = useState(false);
  const [isElectricalListShow, setisElectricalListShow] = useState(false);
  const electricalItems = [
    "Circuit",
    "Breakers",
    "Starters",
    "Contracters",
    "Fuses",
    "Panels",
    "Switchgear",
    "Transformers",
    "Square D",
    "Cuttlerhammer",
    "Westinghouse",
    "All Brands new",
    "Used and Obsolete",
  ];
  const metalItems = [
    "Copper",
    "Brass",
    "Stainless",
    "Steel",
    "Carbide",
    "Forklift",
    "Steel",
    "Batteries",
    "Bronze",
    "All Types Off Alloys Electrical wire",
  ];
  const handleClick = (type: string) => {
    if (type === "metal") {
      setisMetalListShow(!isMetalListShow);
      setisElectricalListShow(false);
    }
    if (type === "electrical") {
      setisElectricalListShow(!isElectricalListShow);
      setisMetalListShow(false);
    }
  };
  return (
    <div className="list-materials">
      <h3 className="display-4 text-center">
        I buy electrical materials and metals like these examples.
      </h3>
      <button
        onClick={() => {
          handleClick("electrical");
        }}
        className="btn-list btn btn-success col-4"
      >
        Electrical
      </button>
      <div
        className={"list electrical " + (isElectricalListShow ? " active" : "")}
      >
        <List items={electricalItems} />
      </div>
      <button
        onClick={() => {
          handleClick("metal");
        }}
        className="btn-list btn btn-warning col-4"
      >
        Metal
      </button>

      <div className={"list metal" + (isMetalListShow ? " active" : "")}>
        <List items={metalItems} />
      </div>
    </div>
  );
};
