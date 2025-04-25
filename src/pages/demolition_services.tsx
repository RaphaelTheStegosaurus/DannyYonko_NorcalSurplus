import { Link } from "react-router";
import { Background } from "../components/background";

export default function Demolition_services() {
  return (
    <>
      <h1>Demolition Service</h1>
      <h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolores,
        ratione pariatur eos magnam assumenda illum nisi voluptate officia rem,
        velit esse laudantium doloribus ipsam deleniti eum voluptates dicta
        voluptas.
      </h2>
      <Link to={"/"}>Back to Home</Link>
      <Background />
    </>
  );
}
