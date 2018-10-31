import React, { Component } from 'react';

export default class TodoList extends Component {

constructor(props) {
  super(props);


  }

  render(){
    let items = this.props.items.map((item) => {
      return (
        <li>{item.title}</li>
      )
    })
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {items}

        </ul>
      </div>
    )
  }
}
