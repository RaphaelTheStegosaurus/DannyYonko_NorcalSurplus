import { Link } from "react-router";
import { Background } from "../components/background";

export default function Buyer_services() {
  return (
    <>
      <h1>Buyer Services</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro
        cumque obcaecati omnis tenetur laborum, libero distinctio incidunt
        quisquam, iste exercitationem corporis consequatur fuga magni recusandae
        in, voluptates laudantium molestias!
      </h2>
      <Link to={"/"}>Back to Home</Link>
      <Background />
    </>
  );
}
