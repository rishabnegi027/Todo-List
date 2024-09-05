import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function Todo({task, deleteTodo, editTodo}) {

  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div className='editBlock'>
      <div className="edit-icon" onClick={()=>editTodo(task.id)}><FaRegEdit/></div>
      <div className="delete-icon" onClick={()=>deleteTodo(task.id)}><MdDelete/></div>
      </div>
    </div>
  )
}

export default Todo;