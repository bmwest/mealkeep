import React, { Component } from 'react';
import InstructionForm from './InstructionForm'

class PostInstructions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: [],
      step: ''
    }
    this.postSteps = this.postSteps.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  handleChange(event) {
    this.setState({step: event.target.value});
  }

  render() {
    return (
      <div>
      <p> look at me!</p>
        <InstructionForm
        handleFormSubmit={this.handleFormSubmit}
        handleChange={this.handleChange}
        value={this.state.step}
        />
      </div>
    )
  }
}

export default PostInstructions;
