import "./styles/app.css";
import "./styles/media-queries.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Background } from "./components/background";
import { List_viewer } from "./containers/list_viewer";
import { Header } from "./containers/header";
import { Footer } from "./containers/footer";
import { Card_contact } from "./components/card_contact";
export const App = () => {
  return (
    <>
      <Header />
      <Card_contact />
      <List_viewer />
      <Footer />
      <Background />
    </>
  );
};
