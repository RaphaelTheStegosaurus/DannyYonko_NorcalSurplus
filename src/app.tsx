import "./styles/app.css";
import "./styles/media-queries.css";
import "./styles/animations.css";
import "./styles/palettecolors.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Background } from "./components/background";
import { Header } from "./containers/header";
import { Footer } from "./containers/footer";
import { Address_card } from "./components/address_card";
import { Card_manager } from "./components/card_manager";
export const App = () => {
  return (
    <>
      <Header />
      <Card_manager />
      <Address_card />
      <Footer />
      <Background />
    </>
  );
};
