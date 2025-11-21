import React from 'react'
import { AiOutlineClear } from "react-icons/ai";
function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={()=>{
            props.deleteItem(props.index)
        }}><AiOutlineClear /></i>
        </span>
    </li>
  )
}

export default Todolist