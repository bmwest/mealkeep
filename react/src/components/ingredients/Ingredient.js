import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
  }

  handleRemoveIngredient(event) {
    event.preventDefault();
    let recipeId = document.getElementById('recipe-id').textContent;
    let ingredientId = this.props.id;
    fetch(`http://localhost:3000/api/v1/recipes/${recipeId}/ingredients/${ingredientId}`, {
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
      this.props.getAllFood();
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <li>
        {this.props.v1} {this.props.v2} {this.props.nextUnit} {this.props.nextFood}
        <a title="r e m o v e" onClick={this.handleRemoveIngredient}> - </a>
        </li>
      </div>
    )
  }
}


export default Ingredient;
