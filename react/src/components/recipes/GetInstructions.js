import React, { Component } from 'react';
import InstructionList from '.InstructionList'
import InstructionForm from './InstructionForm'

class GetInstructions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: []

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  render() {
    return(
      <div>
      <InstructionForm
      handleFormSubmit={this.handleFormSubmit}
      />
      <InstructionList step={this.props.currentSteps}
      handleButtonClick={this.handleButtonClick}/>
      </div>
    )
    console.log(`HI ${blob}`)
  }
}

export default GetInstructions;
