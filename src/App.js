import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function TodoItem({todo, index, handleDelete}) {
  const liClassName = (index + 1) % 3 === 0 ? 'todo green' : 'todo';
  return (
       <li className={liClassName}>
         <span>{todo}</span>
         <button
           className="delButton"
           onClick={() => handleDelete(index)}>x
          </button>
      </li>
    
  );
 }
 
 class App extends React.Component {
  constructor(props) {
   super(props);
 
   this.state = {
    input: "",
    todos: []
   };
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleDelete = this.handleDelete.bind(this);
  }
 
  handleDelete(index) {
   this.setState(prevState => ({
    todos: prevState.todos.filter((todo, i) => {
     return i !== index;
    })
   }));
  }
 
  handleInputChange(e) {
   this.setState({
    input: e.target.value
   });
  }
 
  handleSubmit(e) {
   e.preventDefault();
   this.setState(prevState => ({
    todos: prevState.todos.concat(prevState.input),
    input: ""
   }));
  }
 
  render() {
   return (
    <div className="container">
     <form onSubmit={this.handleSubmit}>
      <input
       type="text"
       value={this.state.input}
       placeholder="add an item"
       onChange={this.handleInputChange}
      />
      <button className="submit_btn">ADD</button>
     </form>
     <ul className="todosContainer">
      {this.state.todos.map((todo, index) => {
       return (
        <TodoItem todo={todo} handleDelete={this.handleDelete} index={index} />
       );
      })}
     </ul>
    </div>
   );
  }
 }
 
 ReactDOM.render(<App />, document.getElementById("root"));
 
export default App;
