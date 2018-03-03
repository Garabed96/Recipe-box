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
    alert("output: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <title> Recipe Box</title>
          <h1 className="App-title">My recipe box</h1>
        </header>
        
        <form onSubmit={this.handleSubmit}>
         <label> 
           Write: 
          <textarea  value={this.state.value} onChange={this.handleChange} />
        </label>
      <input className="box" type="submit" value="Submit" />
      </form>
      </div>
      
    );
  }
}

export default App;
