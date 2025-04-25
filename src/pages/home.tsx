import { Address_card } from "../components/address_card";
import { Background } from "../components/background";
import { Card_manager } from "../components/card_manager";
import Navbar from "../components/Navbar";
import { Footer } from "../containers/footer";
import { Header } from "../containers/header";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Card_manager />
      <Address_card />
      <Footer />
      <Background />
    </>
  );
}
