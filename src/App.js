import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title : 'Go Market', isComplete: true },
      { title : 'Play Football', isComplete: false }
    ];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.todoItems.length > 0 && this.todoItems.map((item, index) =>
              <TodoItem 
                item={item}
                key={index}
              />
            )
          }
          {
            this.todoItems.length === 0 && 'Nothing here!'
          }
        </header>
      </div>
    );
  }
}

export default App;
