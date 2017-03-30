import React, { Component } from 'react';
import InstructionList from './InstructionList'

class Recipe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="recipe-item">
        <h4><a href={`http://localhost:3000/recipes/` + this.props.id}>{this.props.name}</a></h4>
        <a href={`http://localhost:3000/recipes/` + this.props.id}>{this.props.photo} photo goes here</a>
        <p>{this.props.description}</p>
        <div className="time">
          <p>{this.props.hours} hr | {this.props.minutes} min </p>
        </div>
        <ul className="">
          <InstructionList currentSteps={this.props.instructions}
            recipe_id={this.props.id}/>
        </ul>
      </div>
    )
  }
};

export default Recipe;
