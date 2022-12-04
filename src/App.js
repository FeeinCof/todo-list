import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
import classNames from 'classnames';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      renderType: 'all',
      todoItems: [
        { title : 'Go Market', isComplete: false },
        { title : 'Play Football', isComplete: false }
      ]
    };
  };

  inputOnEntering(event) {
    let { value } = event.target;
    let { todoItems } = this.state;
    if (event.key === 'Enter') {
      this.setState({
        inputValue: ' ',
        todoItems: [...todoItems, {
          title: value,
          isComplete: false
        }]
      });
    }
  }

  checkFinishAll() {
    let {todoItems} = this.state;
    let result = true;
    todoItems.map(item => {
      if (!item.isComplete) result = false;
    });
    return result;
  }

  toggleFinishAll() {
    let { todoItems } = this.state;
    !this.checkFinishAll() ? 
      todoItems.map(item => item.isComplete = true) :
      todoItems.map(item => item.isComplete = false)
    this.setState({
      todoItems: [...todoItems]
    })
  }

  onItemClicked(index) {
    let items = [...this.state.todoItems];
    items[index].isComplete = !items[index].isComplete
    this.setState({
      TodoItem: items
    })
  }

  changeRendering(type) {
    let { renderType } = this.state;
    this.setState({
      renderType: type
    });
  }

  clearCompleted() {
    let {todoItems} = this.state;
    ;
    this.setState({
      todoItems: [...todoItems.filter(item => !item.isComplete)]
    })
  }

  render() {
    let {inputValue, todoItems, renderType} = this.state;
   
    return (
      <div>
        <header className="container">
          <h1>todos</h1>
          <div className="component_todos">
            <div className='new_todo'>
              <div>
                <i
                  className={classNames(
                    'arrow',
                    'down',
                    {'finish_all' : this.checkFinishAll()}
                  )}
                  onClick={() => this.toggleFinishAll()}
                />
              </div>
              <div className='input_todo'>
                <input 
                  placeholder='What needs to be done?'
                  type='text'
                  value={inputValue}
                  onChange={event => {
                    this.setState({
                      inputValue: event.value
                    });
                  }}
                  onKeyPress={event => {
                    this.inputOnEntering(event);
                  }}
                />
              </div>
            </div>
            {
              todoItems.length > 0 && todoItems.map((item, index) => {
                let result = (
                  <>
                    <TodoItem 
                      item={item}
                      key={index}
                      onClick={() => this.onItemClicked(index)}
                    />
                  </>
                );
                if (renderType === 'all') return result;
                if (renderType === 'active') {
                  if (!item.isComplete) return result;
                } 
                if (renderType === 'completed') {
                  if (item.isComplete) return result
                }
              }
              ) 
            }
            { todoItems.length > 0 &&
             (
                <div className='footer'>
                  <div className='leftbar_footer'>
                    <div>
                      <span>{this.state.todoItems.length} item left</span>
                    </div>
                    <div>
                      <span 
                        className={classNames({'active': renderType === 'all'})}
                        onClick={() => this.changeRendering('all')}
                      >
                        All
                      </span>
                      <span 
                        className={classNames({'active': renderType === 'active'})}
                        onClick={() => this.changeRendering('active')}
                      >
                        Active
                      </span>
                      <span 
                        className={classNames({'active': renderType === 'completed'})}
                        onClick={() => this.changeRendering('completed')}
                      >
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className='clear_completed'>
                    <span
                      onClick={() => this.clearCompleted()}
                    >
                      Clear completed</span>
                  </div>
                </div>
              )
            }  
            {
              todoItems.length === 0 && ''
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
