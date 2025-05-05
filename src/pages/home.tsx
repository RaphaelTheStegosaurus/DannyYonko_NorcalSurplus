import { Link } from "react-router";
import { Slider } from "../components/slider";
import Title from "../components/title";
import { Page_container } from "../containers/page_container";
export default function Home() {
  return (
    <>
      <Page_container title="WELCOME">
        <Title />
        <section className="container-xl mb-5 pb-5 d-flex flex-column py-4">
          <h2 className="display-5">ELECTRICAL EQUIPMENT & METAL BUYERS</h2>
          <Slider />
          <p className="lead">Buyers of all electrical materials, equipments and machinery.</p>
          <Link to="/contact_us" className="btn btn-primary">
            Contact Us
          </Link>
        </section>
        <section>
          <h2>Our Services</h2>
          <article>
            <h3>Our purchasing services.</h3>
            <p>
              At Norcal Surplus, we specialize in purchasing surplus electrical
              material and equipment, offering top cash payment to business and
              individual across California and neighboring states.
            </p>
            <Link to="/buyers_services" className="btn btn-outline-primary">
              See what electrical materials and equipment we buy
            </Link>
          </article>
          <article>
            <h3>Our demolition and removal services.</h3>
            <p>
              At Norcal Surplus, we specialize in the comprehensive management
              of decommissioning and site preparation for electrical
              infrastructure. We offer a complete service, from initial
              assessment and safety planning, through controlled demolition and
              efficient equipment removal, to thorough site clearance, ensuring
              a smooth and safe transition to the next stages of any project.
            </p>
            <Link to="/demolition_services" className="btn btn-outline-primary">
              See our demolition and removal services
            </Link>
          </article>
        </section>
        <section className="container-xl d-flex flex-column">
          <h2 className="display-5">Why Choose Norcal Surplus?</h2>
          <p className="lead">
            Ready to convert your surplus electrical materials into cash or
            require professional demolition services? Reach out to Norcal
            Surplus and experience a seamless process.
          </p>
          <Link to="/contact_us" className="btn btn-primary">
            Contact us to get to know us.
          </Link>
        </section>
      </Page_container>
    </>
  );
}
