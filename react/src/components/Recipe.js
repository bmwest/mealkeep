import React from 'react'

const Recipe = (props) => {
  return (
    <li>
      <ul>
        <li>{props.photo} photo goes here</li>
        <a href={`http://localhost:3000/recipes/` + props.id}>{props.name}</a>
        <li>{props.description}</li>
        <li>{props.hours} hr | {props.minutes} min </li>
      </ul>
    </li>
  )
  console.log(recipe)
}

export default Recipe;
