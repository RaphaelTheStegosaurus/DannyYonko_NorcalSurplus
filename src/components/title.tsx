import "../styles/title.css";
import LOGO from "../assets/logo/NSP-cropped.svg";
export default function Title() {
  return (
    <div className="title container-fluid py-5 my-2">
      <h1 className="display-1">Norcal </h1>
      <img src={LOGO} alt="NORCAL SURPLUS LOGO" />
      <h1 className="display-1">Surplus</h1>
    </div>
  );
}
