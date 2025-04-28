import { Card } from "./card";
import { List_viewer } from "../containers/list_viewer";
import { WHY_CHOOSE_OURS_CARD } from "../const/cards_informations";

export const Card_manager = () => {
  return (
    <>
      <List_viewer />

      <Card data={WHY_CHOOSE_OURS_CARD} />
    </>
  );
};
