import React from 'react'
import Todo from './todo'
const Todos = (props) => {
    const { todos } = props;

    return (
    <div className='todos'>
        <h4>Todos</h4>
        {todos?.map(todo=><Todo key={todo.id}
        todo={todo}/>)}
        
    
    </div>
  )
}

export default Todos