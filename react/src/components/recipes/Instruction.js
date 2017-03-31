import React, { Component } from 'react';

class Instruction extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveInstruction = this.handleRemoveInstruction.bind(this);
  }

  handleRemoveInstruction(event) {
    event.preventDefault();
    let recipeId = document.getElementById('recipe-id').textContent;
    let stepId = this.props.id;
    fetch(`http://localhost:3000/api/v1/recipes/${recipeId}/instructions/${stepId}`, {
      method: 'DELETE',
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
      this.props.getAllSteps();
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div>
        <li className="">
        {this.props.stepItems}
        <button type="button" onClick={this.handleRemoveInstruction}> - </button>
        </li>
      </div>
    )
  }
}

export default Instruction;
