import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title : 'Go Market', isComplete: false },
        { title : 'Play Football', isComplete: false }
      ]
    };
  }
  onItemClicked(index) {
    let items = [...this.state.todoItems];
    items[index].isComplete = !items[index].isComplete
    this.setState({
      TodoItem: items
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) =>
              <TodoItem 
                item={item}
                key={index}
                onClick={() => this.onItemClicked(index)}
              />
            )
          }
          {
            this.state.todoItems.length === 0 && 'Nothing here!'
          }
        </header>
      </div>
    );
  }
}

export default App;
