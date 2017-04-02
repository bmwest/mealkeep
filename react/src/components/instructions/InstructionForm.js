import React from 'react'

const InstructionForm = (props) => {
  return(
      <form onSubmit={props.handleFormSubmit}>
        <input
        type="text"
        id="form-value"
        placeholder="E.g. Dice onion, garlic, green pepper, and tomato."
        value={props.value}
        onChange={props.handleChange}
        />
        <input type="submit" value="+" />
      </form>
  )
}

export default InstructionForm;
