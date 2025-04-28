import { Address_card } from "../components/address_card";
import { Background } from "../components/background";
import Navigation from "../components/navigation";
import { Footer } from "../containers/footer";
import { Header } from "../containers/header";

export default function Contact_us() {
  return (
    <>
      <Header />
      <Navigation />
      <Address_card />
      <Footer/>
      <Background />
    </>
  );
}
