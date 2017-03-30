import React from 'react'

const Instruction = (props) => {
  return (
    <li className="">
      {props.stepItems}
      <button type="button" onClick={props.handleButtonClick}>Remove</button>
    </li>
  )
}

export default Instruction;
