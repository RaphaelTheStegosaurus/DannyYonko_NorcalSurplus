import { Background } from "../components/background";
import { Link } from "react-router";

export default function About_us() {
  return (
    <>
      <h1>About Us</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, repellat. Est quam dolorem accusantium nemo praesentium corporis quo aliquam. Dolores autem aut nostrum voluptas, consequuntur excepturi accusamus cumque? Eius, officiis.</h2>
      <Link to={"/"}>Back to Home</Link>
      <Background />
    </>
  );
}
