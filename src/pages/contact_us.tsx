import { Link } from "react-router";
import { Background } from "../components/background";

export default function Contact_us() {
  return (
    <>
      <h1>Contact Us</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni
        quibusdam nam neque officiis officia doloribus! Soluta assumenda ut quia
        ad mollitia sed nesciunt consectetur, laboriosam commodi est voluptas
        quo.
      </h2>
      <Link to={"/"}>Back to Home</Link>
      <Background />
    </>
  );
}
