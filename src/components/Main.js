import React from 'react';
import Todo from './Todo';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      contador: 0,
      todos: [],
      input: "",
        }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.handleClickSubs = this.handleClickSubs.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let formatoTodo = { id: this.state.todos.length, text: this.state.input, complete: false}
    let nuevosTodo = [...this.state.todos]
    nuevosTodo.push(formatoTodo)
    this.setState(prevState => {
      return {
        ...this.state,
        todos: nuevosTodo
      }
    })
    console.log(this.state)
  }

  handleOnChange(event) {
    let text = event.target.value
    this.setState(prevState => {
      return {
        ...this.state,
        input: text,
      }
    })
    console.log(this.state)
  }

  handleClickAdd() {
    this.setState(prevState => {
      return {
        ...this.state,
        contador: prevState.contador + 1
      }
    })
  }

  handleClickSubs() {
    this.setState(prevState => {
      return {
        ...this.state,
        contador: prevState.contador - 1
      }
    })
  }

  handleClickReset() {
    this.setState(prevState => {
      return {
        ...this.state,
        contador: 0
      }
    })
  }

  handleChange(id) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })
    let listTodos = updatedTodos

    this.setState(prevState => {
      return {
        ...this.state,
        todos: listTodos,
      }
    })
  }

  render () {

    const todoItems = this.state.todos.map(item => 
    <Todo key={item.id} item={item} handleChange={this.handleChange}/>)
  
    return (
       <div className="Main">
         <div className="TodoList">
           <p>To do list:</p>
             {todoItems}
           </div>
         <div className="tareas">
         <div className="agregar">
              <p>Add a new to do:</p>
              <form onSubmit={this.handleSubmit}>
                <input 
                value={this.state.input}
                onChange={this.handleOnChange}
                placeholder="here..."></input>
              <button type='submit'>Add</button>
              </form>
            </div>
          <div className="contador">
            <p>Counter Excercise</p>
            <div className="row">
            <button onClick={this.handleClickAdd}>+</button>
            <button onClick={this.handleClickSubs}>-</button>
            <button onClick={this.handleClickReset}>Reset</button>
            <div className="numerito"><p>{this.state.contador}</p></div>
            </div>
            </div>
            <div className="pika">
              <img src="https://i.gifer.com/WiCJ.gif" alt="Pikachu"/>
              <p>Thanks for watching!</p>
            </div>
          </div>
       </div>
     );
  }
}


  export default Main;
  