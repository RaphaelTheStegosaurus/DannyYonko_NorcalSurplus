import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about_us"}>About Us</Link>
        <Link to={"/buyer_services"}>Buyer Services</Link>
        <Link to={"/demolition_services"}>Demolition Services</Link>
        <Link to={"/contact_us"}>Contact Us</Link>
    </nav>
  )
}
