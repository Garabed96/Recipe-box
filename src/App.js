import React from 'react';
import './App.css';
import { Panel, PanelGroup ,Modal, Button, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'


//Task1: I can create recipes that have names and ingredients.




class App extends React.Component {
  constructor(props, context){
    super(props);
    this.state = { value: '', show: false};
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

  handlePop() {
    this.setState({ show: true });
  }

  handlePopped() {
    this.setState({ show: false });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        Enter all the ingredients.
        </Popover>
    );

    const tooltip = <Tooltip id="modal-tooltip">Enter Name of Recipe</Tooltip>;



    return (
    <div class="container-flui">
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
      <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
        <Panel eventKey="1">
        <Panel.Heading>Recipes</Panel.Heading>
        <Panel.Body collapsible>Panel content 1</Panel.Body>
      </Panel>
      <Panel eventKey="2">
        <Panel.Heading>
          <Panel.Title toggle>Recipe Example one</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>It's Ingredient</Panel.Body>
        <Panel.Body collapsible>It's Other Ingredient</Panel.Body>
     </Panel>
     </PanelGroup>
        </div>
     
      
      <div class="modal-container" style={{ height: 300 }}
      id="modal-container">

      <Button bsStyle="primary" bsSize="large" onClick={this.handlePop}>
        Add Recipe
      </Button>

      <Modal show={this.state.show} onHide={this.handlePopped} container={this}
                aria-labelledby="contained-modal-title"                
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Ketogic Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={this.handleSubmit}>
        <div className="Recipe">
          <label>
          {' '}
        <OverlayTrigger overlay={tooltip}>
          <a href="#tooltip">Recipe</a>
        </OverlayTrigger>{' '}: 
            <input type="text" value={this.state.value}
            onChange={this.handleShow} />
            </label> 
          </div>
            <div className="Ingredients">         
            <label> 
            <OverlayTrigger overlay={popover}>
          <a href="#popover">Ingredients</a>
        </OverlayTrigger>{' '}: 
            <input  type="text" value={this.state.ingred}
            onChange={this.handle}/>
            </label>
          </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handlePopped}>Close</Button>
          <Button onClick={this.state.value} bsStyle="primary">Add Recipe</Button>
        </Modal.Footer>
      </Modal>
      </div>
  
    </div>
    );
  }
}

export default App;

