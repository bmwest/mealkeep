import React, { Component } from 'react';
import Instruction from './Instruction'
import InstructionForm from './InstructionForm'

class InstructionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: []
    }
    this.getSteps = this.getSteps.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  getSteps() {
    console.log(this.props.recipe_id)
    if(!this.props.recipe_id){
      return []
    }
      fetch(`http://localhost:3000/api/v1/recipes/${this.props.recipe_id}/instructions`)
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
        console.log(body)
        this.setState({steps: body});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  handleFormSubmit(event) {
    event.preventDefault();
  }
  handleButtonClick(event) {
    let oldStep = event.target.value
    let newSteps = this.state.steps.filter(step => {
      return step.id !== oldStep.id
    })
    this.setState({ steps: newSteps })
    alert('Instruction removed')
  }

  componentWillMount() {
    this.getSteps();
  }

  render() {
    let stepItems = this.state.steps.map((s) => {
        return (
          <Instruction
            key={s.id}
            id={s.id}
            recipe={s.recipe_id}
            stepItems={s.step}
          />
        )
    })
    return (
      <div>
        <InstructionForm
      />
      <ul>
        {stepItems}
      </ul>
      </div>
    )
  }
}

export default InstructionList;
