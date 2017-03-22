import React from 'react'
import Recipe from './Recipe'

const RecipeList = (props) => {
  let recipes = props.recipes.map((recipe) => {

    const { id, name, description, hours, minutes, video, photo } = recipe

    return (
      <Recipe
        key={id}
        name={name}
        body={body}
        hours={hours}
        minutes={minutes}
        video={video}
        photo={photo}
      />
    )
  })

  return (
    <ul>
      {recipes}
    </ul>
  )
}

export default RecipeList;
