
import React, { Component } from 'react';

export default class Counter extends Component {

constructor(props) {
  super(props);


  }

  render(){
    let items = this.props.items
      return (
        <h2>The length of the messages: {items.length}</h2>
    )}
}
