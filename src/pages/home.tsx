import { Link } from "react-router";
import { Slider } from "../components/slider";
import Title from "../components/title";
import { Page_container } from "../containers/page_container";
export default function Home() {
  return (
    <>
      <Page_container title="WELCOME">
        <Title />
        <section className="container-xl  mb-5 pb-5 d-flex flex-column py-4">
          <h2 className="display-4 text-center my-lg-5">
            ELECTRICAL EQUIPMENT & METAL BUYERS
          </h2>
          <Slider />
          <p className="lead py-3 text-center">
            Buyers of all electrical materials, equipments and machinery.
          </p>
          <Link
            to="/contact_us"
            className="btn btn-primary btn-lg col-md-4 mx-auto"
          >
            Contact Us
          </Link>
        </section>
        <section>
          <h2 className="display-4 ms-5">Our Services</h2>
          <article className="d-flex flex-column">
            <h3 className="display-6 text-center my-lg-5">
              Our purchasing services.
            </h3>
            <p className="lead mb-5">
              At Norcal Surplus, we specialize in purchasing surplus electrical
              material and equipment, offering top cash payment to business and
              individual across California and neighboring states.
            </p>
            <Link
              to="/buyers_services"
              className="btn btn-outline-primary btn-lg mx-4"
            >
              See what electrical materials and equipment we buy
            </Link>
          </article>
          <article className="d-flex flex-column">
            <h3 className="display-6 text-center my-lg-5">
              Our demolition and removal services.
            </h3>
            <p className="lead mb-5">
              At Norcal Surplus, we specialize in the comprehensive management
              of decommissioning and site preparation for electrical
              infrastructure. We offer a complete service, from initial
              assessment and safety planning, through controlled demolition and
              efficient equipment removal, to thorough site clearance, ensuring
              a smooth and safe transition to the next stages of any project.
            </p>
            <Link
              to="/demolition_services"
              className="btn btn-outline-primary btn-lg mx-auto"
            >
              See our demolition and removal services
            </Link>
          </article>
        </section>
        <section className="container-xl d-flex flex-column">
          <h2 className="display-4 my-lg-4 text-center">
            Why Choose Norcal Surplus?
          </h2>
          {/* <p className="lead">
            Ready to convert your surplus electrical materials into cash or
            require professional demolition services? Reach out to Norcal
            Surplus and experience a seamless process.
          </p> */}
          <p className=" text-center lead py-3">
            "We ensure safe and efficient decommissioning, dismantling, and site
            clearance of electrical infrastructure, supported by our meticulous
            planning and specialized team for a seamless transition in your
            project."
          </p>
          <Link
            to="/about_us"
            className="btn btn-primary btn-lg col-md-4 mx-auto"
          >
            Learn More About Us.
          </Link>
        </section>
      </Page_container>
    </>
  );
}
