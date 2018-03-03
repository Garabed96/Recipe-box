import React, { Component } from 'react';
import './App.css';

//Task1: I can create recipes that have names and ingredients.

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    alert('output: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <div className="App">
        <header className="App-header">
        <title> Keto Recipe </title>
          <h1 className="App-title">Keto Recipe-Meals</h1>
        </header>
      </div>

      <div className="Out">
        <body>
        <form onSubmit={this.handleClick}>
         <label> 
           Write: 
          <textarea  value={this.state.value} onChange={this.handleChange} />
        </label>
      <input className="box" type="submit" value="Submit" />
      </form>
      </body>
      </div>
    </div>
    );
  }
}

export default App;
