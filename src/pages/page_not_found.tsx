import { Background } from "../components/background";
import { Link } from "react-router";

export default function Page_not_found() {
  return (
    <>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to={"/"}>Back to Home</Link>
      <Background />
    </>
  );
}
