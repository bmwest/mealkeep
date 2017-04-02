import React, { Component } from 'react';
import Ingredient from './Ingredient'
import IngredientForm from './IngredientForm'

class IngredientList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [],
      vol1: '',
      vol2: '',
      unit: '',
      food: ''
    }
    this.postFood = this.postFood.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getFood = this.getFood.bind(this)
  }

  handleChange(event) {
    this.setState({vol1: event.target.value,
                  vol2: event.target.value
                  unit: event.target.value
                  food: event.target.value});
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
      <div className="recipe-instructions">
      <a href="#" className="instruction-toggle">+ New Step</a>
        <InstructionForm
        handleFormSubmit={this.handleFormSubmit}
        handleChange={this.handleChange}
        value={this.state.step}
        id="instruction-form"
      />
      <p>How To</p>
      <ul>
        {stepItems}
      </ul>
      </div>
    )
  }
}

export default InstructionList;
