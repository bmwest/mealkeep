import React, { Component } from 'react';
import Ingredient from './Ingredient'
import IngredientForm from './IngredientForm'

class IngredientList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [],
      volume1: '0',
      volume2: '0',
      unit: '0',
      food_item: ''
    }
    this.postFood = this.postFood.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getFood = this.getFood.bind(this)
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'text' ? target.text : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  postFood() {
    let recipeId = document.getElementById('recipe-id').textContent;
    let nextV1 = this.state.volume1
    let nextV2 = this.state.volume2
    let nextUnit = this.state.unit
    let nextFood = this.state.food

      fetch(`http://localhost:3000/api/v1/recipes/${recipeId}/ingredients`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({volume_1: nextV1,
                              volume_2: nextV2,
                              unit: nextUnit,
                              food_item: nextFood
                            })
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
        this.setState({ volume1: '0',
                        volume2: '0',
                        unit: '0',
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
        let errorMessage = `${response.status} ($response.statusText)`,
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

  render() {
    let volOptions = ["0", "1/16", "1/8", "1/4", "1/3", "1/2", "2/3", "3/4"]
    let unitOptions = ["oz", "mL", "L", "dash", "pinch", "tsp", "Tbsp", "cup", "pt",
                      "qt", "gal", "lb"]
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
      <a href="#" className="ingredient-toggle">+ New Ingredient</a>
        <IngredientForm
        handleFormSubmit={this.handleFormSubmit}
        handleChange={this.handleChange}
        value1={this.state.volume1}
        value2={this.state.volume2}
        optionsV2={volOptions}
        value3={this.state.unit}
        optionsUnit={unitOptions}
        value4={this.state.food_item}
      />
      <p>How To</p>
      <ul>
        {foodItems}
      </ul>
      </div>
    )
  }
}

export default IngredientList;
