import { Link } from "react-router";
import { Slider } from "../components/slider";
import Title from "../components/title";
import { Page_container } from "../containers/page_container";
import "../styles/card.css";
export default function About_us() {
  return (
    <>
      <Page_container title="About Us">
        <Title />
        <article className="container-xl d-flex flex-column">
          <p className="lead py-5">
            At Norcal Surplus, we specialize in purchasing surplus electrical
            materials and equipment, offering top cash payments to businesses
            and individuals across California and neighboring states.
          </p>
          <Slider />
          <p className="lead py-5">
            Our mission is to provide a seamless, efficient, and profitable
            solution for those looking to sell their excess electrical
            inventory.
          </p>
          <p className="lead py-5">
            We understand the importance of maximizing value while minimizing
            hassle. Our team is dedicated to ensuring a smooth transaction, from
            initial contact to final payment. We pride ourselves on our
            professionalism, integrity, and commitment to customer satisfaction.
          </p>
          <Link to="/" className="btn btn-primary btn-lg mx-auto">
            Back to Home
          </Link>
        </article>
      </Page_container>
    </>
  );
}
