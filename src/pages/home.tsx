import { Background } from "../components/background";
import { Card_manager } from "../components/card_manager";
import { Footer } from "../containers/footer";
import { Header } from "../containers/header";
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Card_manager />
      <Footer />
      <Background />
    </>
  );
}
