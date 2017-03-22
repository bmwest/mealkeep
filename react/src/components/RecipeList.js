import React from 'react'
import Recipe from './Recipe'

const RecipeList = (props) => {
  let recipes = props.recipes.map((recipe) => {

    const { id, creator, name, description, hours, minutes, video, photo } = recipe

    console.log("recipelist1")
    return (
      <Recipe
        key={id}
        id={id}
        name={name}
        description={description}
        hours={hours}
        minutes={0}
        video={video}
        photo={photo}
      />
    )
  })

  console.log("recipelist2")
  return (
    <ul>
      {recipes}
    </ul>
  )
}

export default RecipeList;
