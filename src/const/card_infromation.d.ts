type type_list = "ul" | "ol";
interface CardInformations {
  title: string;
  type_list: type_list;
  list: string[];
  paragraph?:string;
}
export type {CardInformations};