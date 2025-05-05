import { Link } from "react-router";
import { Page_container } from "../containers/page_container";

export default function Page_not_found() {
  return (
    <>
      <Page_container>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to={"/"}>Back to Home</Link>
      </Page_container>
    </>
  );
}
