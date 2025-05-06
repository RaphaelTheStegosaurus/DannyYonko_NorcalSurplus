// import "../styles/address.css";
export const Address_card = () => {
  return (
    <address className="my-5">
      {/* <p>
        Ready to convert your surplus electrical materials into cash or require
        professional demolition services? Reach out to Norcal Surplus and
        experience a seamless process.
      </p> */}
      <h4 className="text-light">
        Phone:
        <a className="btn btn-outline-light btn-lg ms-3 border-0" href="tel:+14084202442">408-420-2442</a>
      </h4>
      <h4 className="text-light">
        Email:
        <a className="btn btn-outline-light btn-lg ms-3 border-0" href="mailto:norcalsurplusbuyers@gmail.com">
          norcalsurplusbuyers@gmail.com
        </a>
      </h4>
      <h5 className="text-light display-6">Service Area: Proudly serving California and neighboring states.</h5>
    </address>
  );
};
