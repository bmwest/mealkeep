import React from 'react'

const Recipe = (props) => {
  return (
    <li>
      {props.name}
      {props.body}
      {props.hours}
      {props.minutes}
      {props.video}
      {props.photo}
    </li>
  )
}

export default Recipe
