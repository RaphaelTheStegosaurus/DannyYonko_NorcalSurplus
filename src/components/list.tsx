import React from "react";
interface Props {
  items: string[];
}
export const List: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
