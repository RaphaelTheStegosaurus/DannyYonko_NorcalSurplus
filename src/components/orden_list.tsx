interface Props {
  list:string[]
}
export const Orden_list:React.FC<Props>  = ({list}) => {
  return (
    <ol>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
};
