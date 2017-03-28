import React, { Component } from 'react';
import Recipe from './Recipe'

class AppIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      currentPage: 1,
      recipesPerPage: 6
    };
    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  getData() {
    fetch('https://quiet-scrubland-40971.herokuapp.com/api/v1/recipes', {
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
      this.setState({recipes: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    let indexOfLastRecipe = this.state.currentPage * this.state.recipesPerPage;
    let indexOfFirstRecipe = indexOfLastRecipe - this.state.recipesPerPage;
    let currentRecipes = this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    let newRecipes = currentRecipes.map((recipe, index) => {
      return (
        <Recipe
          id={recipe.id}
          key={index}
          name={recipe.name}
          description={recipe.description}
          minutes={recipe.minutes}
          hours={recipe.hours}
          photo={recipe.photo}
        />
      )
    });

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.recipes.length / this.state.recipesPerPage); i++){
      pageNumbers.push(i);
    }

    let renderPageNumbers = pageNumbers.map(number => {
      let icon = `>`
      if (this.state.currentPage > 1) {
        icon = `<`
      }
      return (
        <li
        key={number}
        id={number}
        onClick={this.handleClick}
        className="page-number">
        {icon}
        </li>
      );
    });

    return(
      <div>
        <ul className="recipe-list">
          {newRecipes}
        </ul>
        <ul className="page-number">
          <p>
            {renderPageNumbers}
          </p>
          <p>{`Current Page ${this.state.currentPage}`}</p>
        </ul>
      </div>
    )
  }
};

export default AppIndex
