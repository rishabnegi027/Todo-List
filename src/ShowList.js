import React,{ useState } from "react";
    
 function ShowList({addTodo}){
    const[value,setvalue] = useState('');

    const handleSubmit = (event)=> {
        event.preventDefault();
        addTodo(value);
        setvalue('');
    }

    const handleChange = (event)=>{
        setvalue(event.target.value);
    }

    return( 
        <div className="TodoForm">
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input className="todo-input" type="text" value={value} onChange={handleChange} placeholder="What is the value today?"/>
                <button type="submit" className='todo-btn'>Add value</button>
            </form>
        </div>
    )
}

export default ShowList;


