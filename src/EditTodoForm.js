import React, {useState} from 'react';

function EditTodoForm({editTodo, task}){

    const[value,setvalue] = useState(task.task);

    const handleSubmit = (event)=> {
        event.preventDefault();

        editTodo(value, task.id);

        setvalue('')
   
    }

    const handleChange = (event)=>{
        setvalue(event.target.value);
    }

    return( 
        <div className="TodoForm">
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" value={value} className='todo-input' onChange={handleChange} placeholder="Update Task"/>
                <button type="submit" className='todo-btn'>Update Tasks</button>
            </form>
        </div>
    )
}

export default EditTodoForm;