import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo-list'
import Counter from './components/counter'


class App extends Component {
  render() {
    let listItems = [
      {
        done: false,
        title: 'Take the dog out'
      },
      {
        done: false,
        title: 'Feed the dog out'
      },
      {
        done: false,
        title: 'Pat the dog out'
      }
    ]
    return (
      <div className="App">
      < Counter items={listItems}/>
      < TodoList items={listItems} />

      </div>
    );
  }
}

export default App;
