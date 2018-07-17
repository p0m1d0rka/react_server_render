import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        HelloWorld
      </div>
    )
  }
}
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('reactApp')
);