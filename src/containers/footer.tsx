import "../styles/footer.css";
import { Customer_form } from "../components/customer_form";

export const Footer = () => {
  
  return (
    <footer>
      <h1>NORCAL SURPLUS</h1>
      <p>
        At Norcal Surplus, we believe in building lasting relationships with our
        clients by offering fair deals, exceptional service, and prompt
        transactions. Let us help you declutter your space and provide you with
        the best value for your surplus electrical materials and equipment.
      </p>
      <Customer_form/>
      
    </footer>
  );
};
