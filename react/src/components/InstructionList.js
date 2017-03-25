import React from 'react'
import Instruction from './Instruction'

const InstructionList = (props) => {
  let steps = props.steps.map((step) => {

    let handleButtonClick = () => props.handleButtonClick(event)

      return (
        <Instruction
          key={step.id}
          step={step.step}
          handleButtonClick={handleButtonClick}
        />
      )
  })

  return (
    <ul>
      {steps}
    </ul>
  )
}

export default InstructionList;
