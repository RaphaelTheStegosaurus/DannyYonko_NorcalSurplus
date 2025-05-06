import { Address_card } from "../components/address_card";
import { Customer_form } from "../components/customer_form";
import { Page_container } from "../containers/page_container";

import FACEBOOK_ICON from "../assets/icons/facebook-svgrepo-com.svg";
import INSTAGRAM_ICON from "../assets/icons/instagram-svgrepo-com.svg";

export default function Contact_us() {
  return (
    <>
      <Page_container title="Contact Us">
        <article className="container-fluid px-5 py-3 d-flex flex-column">
          <h2 className="display-4 text-light py-3">Contact Us Today!</h2>
          <p className="lead py-1 text-start w-100">
            Please fill out the following form and we will contact you as soon
            as possible.
          </p>
          <Customer_form />
          <Address_card />
          <div className="social-media">
            <a href="https://www.instagram.com/norcalsurplusbuyers/">
              <img src={INSTAGRAM_ICON} alt="INSTAGRAM" title="INSTAGRAM" />
            </a>
            <a href="https://www.facebook.com/groups/417309805544906/user/61556962869740/">
              <img src={FACEBOOK_ICON} alt="FACEBOOK" title="FACEBOOK" />
            </a>
          </div>
        </article>
      </Page_container>
      {/* <Footer /> */}
    </>
  );
}
