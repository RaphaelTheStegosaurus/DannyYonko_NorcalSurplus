import { Page_container } from "../containers/page_container";
import "../styles/card.css";
export default function About_us() {
  return (
    <>
      <Page_container title="About Us">
        <article className="container-xl">
          <p className="lead">
            At Norcal Surplus, we specialize in purchasing surplus electrical
            materials and equipment, offering top cash payments to businesses
            and individuals across California and neighboring states. Our
            mission is to provide a seamless, efficient, and profitable solution
            for those looking to sell their excess electrical inventory.
          </p>
        </article>
      </Page_container>
    </>
  );
}
