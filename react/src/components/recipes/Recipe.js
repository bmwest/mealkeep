import React from 'react'

const Recipe = (props) => {
  return (
    <div className="recipe-item">
      <h4><a href={`http://localhost:3000/recipes/` + props.id}>{props.name}</a></h4>
        <p>{props.description}</p>
        <p>{props.ingredients}</p>
        <div className="time">
          <p>{props.hours} hr | {props.minutes} min </p>
        </div>
    </div>
  )
}

export default Recipe;
