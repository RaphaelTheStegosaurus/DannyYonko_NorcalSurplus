import { Link, useLocation } from "react-router";

export default function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <nav className="container-fluid bg-light bg-opacity-50 btn-group position-fixed bottom-0 py-2 px-1 d-flex flex-lg-row justify-content-between border-top">
      <Link
        className={`btn py-2 ${
          isActive("/") ? "btn-outline-primary" : "btn-primary"
        }`}
        to={"/"}
      >
        Home
      </Link>
      <Link
        className={`btn py-2 ${
          isActive("/about_us") ? "btn-outline-primary" : "btn-primary"
        }`}
        to={"/about_us"}
      >
        About Us
      </Link>
      <Link
        className={`btn py-2 ${
          isActive("/buyer_services") ? "btn-outline-primary" : "btn-primary"
        }`}
        to={"/buyer_services"}
      >
        Buyer Services
      </Link>
      <Link
        className={`btn py-2 ${
          isActive("/demolition_services")
            ? "btn-outline-primary"
            : "btn-primary"
        }`}
        to={"/demolition_services"}
      >
        Demolition Services
      </Link>
      <Link
        className={`btn py-2 ${
          isActive("/contact_us") ? "btn-outline-primary" : "btn-primary"
        }`}
        to={"/contact_us"}
      >
        Contact Us
      </Link>
    </nav>
  );
}
