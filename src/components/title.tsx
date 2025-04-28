import "../styles/title.css";
import LOGO from "../assets/logo/NSP-cropped.svg";
export default function Title() {
  return (
    <div id="TITLE" className="title">
      <h1>Norcal </h1>
      <img src={LOGO} alt="NORCAL SURPLUS LOGO" />
      <h1>Surplus</h1>
    </div>
  );
}
