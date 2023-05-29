import React from 'react'

const Todo = (props) => {
    const {todo} = props
  return (
    
        <div className={`todo ${todo.status}`}>
        <span>{todo.task}</span>
        <div className="actions">
        <i className="fal fa-check"></i>
        <i className="fas fa-trash delete"></i>
       
        </div>
    </div>
    
  )
}

export default Todo