import React from 'react'

const IngredientForm = props => {
  return(
    <form onSubmit={props.handleFormSubmit}>
      <label>
        volume one:
        <input
        type="text"
        value={props.value1}
        name="volume1"
        placeholder="E.g. 1, 3, 35"
        value={props.value1}
        onChange={props.handleV1Change} />
      </label>
      <label>
        volume two:
        <select value={props.value2} name="volume2" onChange={props.handleV1Change}>
        <option value={props.optionsV2[0]}>{props.optionsV2[0]}</option>
        <option value={props.optionsV2[1]}>{props.optionsV2[1]}</option>
        <option value={props.optionsV2[2]}>{props.optionsV2[2]}</option>
        <option value={props.optionsV2[3]}>{props.optionsV2[3]}</option>
        <option value={props.optionsV2[4]}>{props.optionsV2[4]}</option>
        <option value={props.optionsV2[5]}>{props.optionsV2[5]}</option>
        <option value={props.optionsV2[6]}>{props.optionsV2[6]}</option>
        <option value={props.optionsV2[7]}>{props.optionsV2[7]}</option>
        </select>
      </label>
      <label>
        unit:
        <select value={props.value3} name="unit" onChange={props.handleUnitChange}>
        <option value={props.optionsUnit[0]}>{props.optionsUnit[0]}</option>
        <option value={props.optionsUnit[1]}>{props.optionsUnit[1]}</option>
        <option value={props.optionsUnit[2]}>{props.optionsUnit[2]}</option>
        <option value={props.optionsUnit[3]}>{props.optionsUnit[3]}</option>
        <option value={props.optionsUnit[4]}>{props.optionsUnit[4]}</option>
        <option value={props.optionsUnit[5]}>{props.optionsUnit[5]}</option>
        <option value={props.optionsUnit[6]}>{props.optionsUnit[6]}</option>
        <option value={props.optionsUnit[7]}>{props.optionsUnit[7]}</option>
        <option value={props.optionsUnit[8]}>{props.optionsUnit[8]}</option>
        <option value={props.optionsUnit[9]}>{props.optionsUnit[9]}</option>
        <option value={props.optionsUnit[10]}>{props.optionsUnit[10]}</option>
        <option value={props.optionsUnit[11]}>{props.optionsUnit[11]}</option>
        </select>
      </label>
      <label>
        food item:
        <input
        type="text"
        name="food_item"
        placeholder="E.g. samon, diced shallot, olive oil"
        value={props.value4}
        onChange={props.handleFoodChange} />
      </label>
      <input type="submit" value="+" />
    </form>
  )
}

export default IngredientForm;
