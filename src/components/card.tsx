import React from "react";
import { CardInformations } from "../const/card_infromation";
import { Orden_list } from "./orden_list";
import { Unorden_list } from "./unorden_list";
import "../styles/card.css";
interface Props {
  data: CardInformations;
}
export const Card: React.FC<Props> = ({ data }) => {
  return (
    <article>
      <h3>{data.title}</h3>
      {data.paragraph && <p>{data.paragraph}</p>}
      {data.type_list == "ol" ? (
        <Orden_list list={data.list} />
      ) : (
        <Unorden_list list={data.list} />
      )}
    </article>
  );
};
