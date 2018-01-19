import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {greeting: "React App"};
    this.clicked = this.clicked.bind(this);
  }

  render() {
    return (
      <div>
        <vaadin-text-field ref="text" placeholder="Type Something"></vaadin-text-field>
        <vaadin-button onClick={this.clicked}>Click Me!</vaadin-button>
        <h4>Hello {this.state.greeting}!</h4>
      </div>
    );
  }

  clicked() {
    this.setState({greeting: this.refs.text.value})
  }
}

export default App;
