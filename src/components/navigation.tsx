import { Link } from "react-router";
import "../styles/navigation.css";
import { useState } from "react";
export default function Navigation() {
  const [IsShowingMenu, setIsShowingMenu] = useState(false);
  return (
    <div className="navigation ">
      <button
        className={IsShowingMenu ? "active" : ""}
        onClick={() => {
          setIsShowingMenu(!IsShowingMenu);
          console.log(`The Menu is ${IsShowingMenu}`);
        }}
      >
        {IsShowingMenu ? " ✖︎ " : " ☰ "}
      </button>
      <nav className={IsShowingMenu ? "active" : ""} id="Menu">
        <Link to={"/"}>Home</Link>
        <Link to={"/about_us"}>About Us</Link>
        <Link to={"/buyer_services"}>Buyer Services</Link>
        <Link to={"/demolition_services"}>Demolition Services</Link>
        <Link to={"/contact_us"}>Contact Us</Link>
      </nav>
    </div>
  );
}
