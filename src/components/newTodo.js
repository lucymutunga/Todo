import React, { useState } from 'react'

const NewTodo = ({todos, settodos}) => {
    const[title,settitle] = useState("");
    const handleChange = (e) => {
        settitle(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        const date= new Date();

       let new_task= {
        id:Date.now(),
        task: title, 
        status: 'Notstarted',
        due_date: date.toDateString()
       }
    
    settodos([...todos,new_task]);
    settitle("")
    }
  return (
    <form className='new-task' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a new task'
         onChange={handleChange}value={title}/>
        <button type="submit">Yes i can!</button>
    </form>
  )
}

export default NewTodo