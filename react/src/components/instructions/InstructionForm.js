import React from 'react'

const InstructionForm = (props) => {
  return(
    <form onSubmit={props.handleFormSubmit}>
      <input
      type="text"
      placeholder="E.g. Dice onion, garlic, green pepper, and tomato."
      onChange={props.handleChange}
      />
      <input type="submit" value="Add Step" />
    </form>
  )
}

export default InstructionForm;
