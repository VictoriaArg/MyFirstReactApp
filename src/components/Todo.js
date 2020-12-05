import React from 'react';

function Todo(props) {
    return (
      <div className="TodoItem">
        <input 
        type="checkbox" 
        checked={props.item.complete}
        onChange={() => props.handleChange(props.item.id)} />
      <p>{props.item.text}</p>
      </div>
    );
  }
  
  export default Todo;
  