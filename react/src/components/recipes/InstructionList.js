import React, { Component } from 'react';
import Instruction from './Instruction'
import InstructionForm from './InstructionForm'

class InstructionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: [],
      step: ''
    }
    this.postSteps = this.postSteps.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getSteps = this.getSteps.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange(event) {
    this.setState({step: event.target.value});
  }

  postSteps() {
    let recipeId = document.getElementById('recipe-id').textContent;
    let nextStep = this.state.step

      fetch(`http://localhost:3000/api/v1/recipes/${recipeId}/instructions`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ step: `${nextStep}` })
      }).then(response => {
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
      .then(text => {
        this.setState({ steps: text,
                        step: ''});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  handleFormSubmit(event) {
    event.preventDefault();
    this.postSteps();
  }

  clearForm(event) {
    let newStep = event.target.value
    this.setState({ step: newStep})
  }

  getSteps() {
    let recipeId = document.getElementById('recipe-id').textContent;
    fetch(`http://localhost:3000/api/v1/recipes/${recipeId}/instructions`, {
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

  componentDidMount() {
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
            getAllSteps={this.getSteps}
          />
        )
    })
    return (
      <div>
        <InstructionForm
        handleFormSubmit={this.handleFormSubmit}
        handleChange={this.handleChange}
        value={this.state.step}
      />
      <ul>
        {stepItems}
      </ul>
      </div>
    )
  }
}

export default InstructionList;
