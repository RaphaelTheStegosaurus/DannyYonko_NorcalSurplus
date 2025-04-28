import { Background } from "../components/background";
import { Card } from "../components/card";
import Navigation from "../components/navigation";
import {
  DEMOLITION_AND_RENOVAL_SERVICES_CARD,
  OUR_PROCESS_CARD,
} from "../const/cards_informations";
import { Footer } from "../containers/footer";
import { Header } from "../containers/header";

export default function Demolition_services() {
  return (
    <>
      <Header />
      <Navigation />
      <Card data={DEMOLITION_AND_RENOVAL_SERVICES_CARD} />
      <Card data={OUR_PROCESS_CARD} />
      <Footer/>
      <Background />
    </>
  );
}
