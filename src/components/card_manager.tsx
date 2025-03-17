import { Card } from "./card";
import { List_viewer } from "../containers/list_viewer";
import {
  DEMOLITION_AND_RENOVAL_SERVICES_CARD,
  OUR_PROCESS_CARD,
  OUR_PURCHASING_CATEGORIES_CARD,
  WHY_CHOOSE_OURS_CARD,
} from "../const/cards_informations";
export const Card_manager = () => {
  return (
    <>
      <Card data={WHY_CHOOSE_OURS_CARD} />
      <Card data={OUR_PURCHASING_CATEGORIES_CARD} />
      <List_viewer />
      <Card data={DEMOLITION_AND_RENOVAL_SERVICES_CARD} />
      <Card data={OUR_PROCESS_CARD} />
      <Card data={WHY_CHOOSE_OURS_CARD} />
    </>
  );
};
