import { Card } from "../components/card";
import {
  OUR_PURCHASING_CATEGORIES_CARD,
  WHY_CHOOSE_OURS_CARD,
} from "../const/cards_informations";
import { Page_container } from "../containers/page_container";

export default function Buyer_services() {
  return (
    <>
      <Page_container title="Buyer Services">
        <Card data={WHY_CHOOSE_OURS_CARD} tagId="BUYER_SERVICES" />
        <Card data={OUR_PURCHASING_CATEGORIES_CARD} />
      </Page_container>
    </>
  );
}
