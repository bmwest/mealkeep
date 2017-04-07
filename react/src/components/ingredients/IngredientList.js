import React, { Component } from 'react';
import Ingredient from './Ingredient'
import IngredientForm from './IngredientForm'

class IngredientList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      ingredients: [],
      volume1: '',
      volume2: '',
      unit: '',
      food_item: ''
    }
    this.postFood = this.postFood.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleV1Change = this.handleV1Change.bind(this)
    this.handleV2Change = this.handleV2Change.bind(this)
    this.handleUnitChange = this.handleUnitChange.bind(this)
    this.handleFoodChange = this.handleFoodChange.bind(this)
    this.getFood = this.getFood.bind(this)
    this.toggleIngredientForm = this.toggleIngredientForm.bind(this)
  }

  handleV1Change(event) {
    this.setState({ volume1: event.target.value });
  }

  handleV2Change(event) {
    this.setState({ volume2: event.target.value });
  }

  handleUnitChange(event) {
    this.setState({ unit: event.target.value });
  }

  handleFoodChange(event) {
    this.setState({ food_item: event.target.value });
  }

  postFood() {
    let recipeId = document.getElementById('recipe-id').textContent;
    let nextV1 = this.state.volume1
    let nextV2 = this.state.volume2
    let nextUnit = this.state.unit
    let nextFood = this.state.food_item

      fetch(`http://localhost:3000/api/v1/recipes/${recipeId}/ingredients`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredient: { volume1: `${nextV1}`,
                              volume2: `${nextV2}`,
                              unit: `${nextUnit}`,
                              food_item: `${nextFood}`}
                            })
      }).then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json();
      })
      .then(text => {
        this.setState({ ingredients: text,
                        volume1: '',
                        volume2: ' ',
                        unit: ' ',
                        food_item: '' });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  handleFormSubmit(event) {
    event.preventDefault();
    this.postFood();
  }

  getFood() {
    let recipeId = document.getElementById('recipe-id').textContent;
    fetch(`http://localhost:3000/api/v1/recipes/${recipeId}/ingredients`, {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({ingredients: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getFood();
  }

  toggleIngredientForm() {
    event.preventDefault();
    let form = document.getElementById('ingrentient-toggle');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none'
    }
  }

  render() {
    let volOptions = ["", "0", "1/16", "1/8", "1/4", "1/3", "1/2", "2/3", "3/4"]
    let unitOptions = ["", "oz", "mL", "L", "dash", "pinch", "tsp", "Tbsp",
                      "cup", "pt", "qt", "gal", "lb"]
    let foodItems = this.state.ingredients.map((i) => {
        return (
          <Ingredient
            key={i.id}
            id={i.id}
            recipe={i.recipe_id}
            v1={i.volume1}
            v2={i.volume2}
            nextUnit={i.unit}
            nextFood={i.food_item}
            getAllFood={this.getFood}
          />
        )
    })
    return (
      <div className="recipe-ingredients">
        <IngredientForm
        handleFormSubmit={this.handleFormSubmit}
        handleV1Change={this.handleV1Change}
        handleV2Change={this.handleV2Change}
        handleUnitChange={this.handleUnitChange}
        handleFoodChange={this.handleFoodChange}
        toggleIF={this.toggleIngredientForm}
        value1={this.state.volume1}
        value2={this.state.volume2}
        optionsV2={volOptions}
        value3={this.state.unit}
        optionsUnit={unitOptions}
        value4={this.state.food_item}
      />
        <p>Ingredients</p>
        <div className="ingredient-list">
          <ul>
            {foodItems}
          </ul>
      </div>
      </div>
    )
  }
}

export default IngredientList;
