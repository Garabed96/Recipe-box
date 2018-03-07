import React, { Component } from 'react';
import './App.css';
import {Modal, Button} from 'react-bootstrap'


//Task1: I can create recipes that have names and ingredients.




class App extends Component {
  constructor(props, context){
    super(props);
    this.state = { value: '', show: false};
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this); this.handleShow = this.handleShow.bind(this);
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

  handlePop() {
    this.setState({ show: true });
  }

  handlePopped() {
    this.setState({ show: false });
  }

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     pop this 
    //     </Popover>
    // );

    // const tooltip = <Tooltip id="modal-tooltip">Wow much cool</Tooltip>;



    return (
    <div>
      <div className="App">
        <header className="App-header">
        <title> Keto Recipe </title>
          <h1 className="App-title">Ketogenisis title</h1>
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
     
     
      
      <div>
      <Button bsStyle="primary" bsSize="large" onClick={this.handlePop}>
        Launch Modal
      </Button>

      <Modal
        show={this.state.show} onHide={this.handlePopped}>
        <Modal.Header closeButton>
          <Modal.Title>Ketogic Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <p> 
        there is a {' '}
        <OverlayTrigger overlay={popover}>
          <a href="#popover">popover</a>
        </OverlayTrigger>{' '}
        here
        </p> */}

        {/* <p>
        there is a{' '}
        <OverlayTrigger overlay={tooltip}>
          <a href="#tooltip">tooltip</a>
        </OverlayTrigger>{' '}
          here
        </p> */}

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handlePopped}>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>

    </div>
    );
  }
}

export default App;
