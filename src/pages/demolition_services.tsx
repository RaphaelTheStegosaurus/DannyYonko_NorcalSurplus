import { Card } from "../components/card";
import {
  DEMOLITION_AND_RENOVAL_SERVICES_CARD,
  OUR_PROCESS_CARD,
} from "../const/cards_informations";
import { Page_container } from "../containers/page_container";

export default function Demolition_services() {
  return (
    <>
      <Page_container title="Demolition Services">
        <Card data={DEMOLITION_AND_RENOVAL_SERVICES_CARD} />
        <Card data={OUR_PROCESS_CARD} />
      </Page_container>
    </>
  );
}
