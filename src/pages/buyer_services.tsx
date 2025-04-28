import { Background } from "../components/background";
import Navigation from "../components/navigation";
import { Card } from "../components/card";
import { Header } from "../containers/header";
import {
  OUR_PURCHASING_CATEGORIES_CARD,
  WHY_CHOOSE_OURS_CARD,
} from "../const/cards_informations";
import { Footer } from "../containers/footer";

export default function Buyer_services() {
  return (
    <>
      <Header />
      <Navigation />
      <Card data={WHY_CHOOSE_OURS_CARD} tagId="BUYER_SERVICES" />
      <Card data={OUR_PURCHASING_CATEGORIES_CARD} />
      <Footer/>
      <Background />
    </>
  );
}
