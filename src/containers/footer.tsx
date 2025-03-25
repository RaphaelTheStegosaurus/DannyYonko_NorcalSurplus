import "../styles/footer.css";
import FACEBOOK_ICON from "../assets/icons/facebook-svgrepo-com.svg";
import INSTAGRAM_ICON from "../assets/icons/instagram-svgrepo-com.svg";
export const Footer = () => {
  return (
    <footer>
      <h1>NORCAL SURPLUS</h1>
      <h2>ELECTRICAL EQUIPMENT & METAL BUYERS</h2>
      <p>
        At Norcal Surplus, we believe in building lasting relationships with our
        clients by offering fair deals, exceptional service, and prompt
        transactions. Let us help you declutter your space and provide you with
        the best value for your surplus electrical materials and equipment.
      </p>
      <div className="social-media">
        <a href="https://www.instagram.com/norcalsurplusbuyers/">
          <img src={INSTAGRAM_ICON} alt="INSTAGRAM" title="INSTAGRAM" />
        </a>
        <a href="https://www.facebook.com/groups/417309805544906/user/61556962869740/">
          <img src={FACEBOOK_ICON} alt="FACEBOOK" title="FACEBOOK" />
        </a>
      </div>
    </footer>
  );
};
