import React, { Component } from 'react';
import InstructionForm from './InstructionForm'
import InstructionList from './InstructionList'

class GetInstructions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: []
    }
    this.getData = this.getData.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getData() {
    fetch('http://localhost:3000/api/v1/instructions', {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} ($response.statusText)`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({steps: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let newStep = event.target.value
    let newSteps = [...this.state.steps, newStep]
    this.setState({ step: newSteps })
  }

  handleButtonClick(event) {
    let oldStep = event.target.value
    let newSteps = this.state.steps.filter(step => {
      return step.id !== oldStep.id
    })
    this.setState({ steps: newSteps })
    alert('Instruction removed')
  }

  handleChange(event) {
    let newStep = event.target.value
    let newSteps = [...this.state.steps, newStep]
    this.setState({ step: newSteps })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    let blob = this.state.steps
    return(
      <div>
      <InstructionForm
      handleFormSubmit={this.handleFormSubmit}
      />
      <InstructionList steps={this.state.steps}
      handleButtonClick={this.handleButtonClick}/>
      </div>
    )
    console.log(`HI ${blob}`)
  }
}

export default GetInstructions;
