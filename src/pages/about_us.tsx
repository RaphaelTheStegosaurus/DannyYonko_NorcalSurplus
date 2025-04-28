import { Background } from "../components/background";
import Navigation from "../components/navigation";
import { Footer } from "../containers/footer";
import { Header } from "../containers/header";

export default function About_us() {
  return (
    <>
      <Header />
      <Navigation />
      <div id="ABOUT_US" className="about-information">
        <p className="col-8">
          At Norcal Surplus, we specialize in purchasing surplus electrical
          materials and equipment, offering top cash payments to businesses and
          individuals across California and neighboring states. Our mission is
          to provide a seamless, efficient, and profitable solution for those
          looking to sell their excess electrical inventory.
        </p>
      </div>
      <Footer/>
      <Background />
    </>
  );
}
