import React, { Component } from 'react';
import './App.css';
import { Button, ButtonToolbar, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

//Task1: I can create recipes that have names and ingredients.

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      show: false
    };
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePop = this.handlePop.bind(this);
    this.handlePopped = this.handlePopped.bind(this);
  }

  handleShow(event) {
    this.setState({value: event.target.value});
  }

  handleClose(event) {
    alert('output: ' + this.state.value);
    event.preventDefault();
  }
  handlePopped(event) {
    this.setState({ show: false });
  }

  handlePop(event) {
    this.setState({ show: true });
    
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        pop this 
        </Popover>
    );

    const tooltip = <Tooltip id="modal-tooltip">Wow much cool</Tooltip>;


    return (
    <div>
      <div className="App">
        <header className="App-header">
        <title> Keto Recipe </title>
          <h1 className="App-title">Keto Recipe-Meals</h1>
        </header>
      </div>

      <div className="Out">
        <form onSubmit={this.handleClose}>
         <label> 
           Write: 
          <textarea  value={this.state.value} onChange={this.handleShow} />
        </label>
      <input className="box" type="submit" value="Submit" />
      </form>
      </div>

      <Button bsStyle="primary" bsSize="small" onClick={this.handlePop}>
        Temporary Recipe box
      </Button>
      
      <div>
      <Modal show={this.state.show} onHide={this.handlePopped}>
        <Modal.Header closeButton>
          <Modal.Title>Recipes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1>  Ingredients </h1>
        <p>
        this is a {''} 
        <OverlayTrigger overlay={popover}>
        <a href="#popover">popover</a>
        </OverlayTrigger>{''}
        here
        </p>

        <h2> Tooltips in modal </h2>
        <p>
        this is a {''} 
        <OverlayTrigger overlay={popover}>
        <a href="#tooltip">tooltip</a>
        </OverlayTrigger>{''}
        here
        </p>
        </Modal.Body>
        <Modal.Footer> 
          <Button onClick={this.handleClose}>Close</Button>
          <Button> Submit</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
    );
  }
}

export default App;
