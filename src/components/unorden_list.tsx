import React from "react"

interface Props {
  list:string[]
}
export const Unorden_list : React.FC<Props> = ({list}) => {
  return (
    <ul>
        {list.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
    </ul>
  )
}
