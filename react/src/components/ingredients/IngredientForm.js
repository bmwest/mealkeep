import React from 'react'

const IngredientForm = props => {
  return(
    <div>
      <div className="new-ingredient">
        <a href="#" onClick={props.toggleIF}>+ New Ingredient</a>
      </div>
      <div id="ingredient-toggle">
      <form onSubmit={props.handleFormSubmit}>
        <div className="small-6 medium-3 large-2 columns">
            <label>
              vol:
              <input
              id="text-line"
              type="text"
              value={props.value1}
              name="volume1"
              placeholder="#"
              value={props.value1}
              onChange={props.handleV1Change} />
            </label>
          </div>
          <div className="small-6 medium-3 large-2 columns">
            <label>
              vol:
              <select value={props.value2} name="volume2" id="text-line" onChange={props.handleV2Change}>
              <option value={props.optionsV2[0]}>{props.optionsV2[0]}</option>
              <option value={props.optionsV2[1]}>{props.optionsV2[1]}</option>
              <option value={props.optionsV2[2]}>{props.optionsV2[2]}</option>
              <option value={props.optionsV2[3]}>{props.optionsV2[3]}</option>
              <option value={props.optionsV2[4]}>{props.optionsV2[4]}</option>
              <option value={props.optionsV2[5]}>{props.optionsV2[5]}</option>
              <option value={props.optionsV2[6]}>{props.optionsV2[6]}</option>
              <option value={props.optionsV2[7]}>{props.optionsV2[7]}</option>
              <option value={props.optionsV2[8]}>{props.optionsV2[8]}</option>
              </select>
            </label>
          </div>
          <div className="small-6 medium-3 large-2 columns">
            <label>
              unit:
              <select value={props.value3} name="unit" id="text-line" onChange={props.handleUnitChange}>
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
              <option value={props.optionsUnit[12]}>{props.optionsUnit[12]}</option>
              </select>
            </label>
          </div>
          <div className="small-4 medium-4 large-4 columns">
            <label>
              name:
              <input
              id="text-line"
              type="text"
              name="food_item"
              placeholder="olive oil"
              value={props.value4}
              onChange={props.handleFoodChange} />
            </label>
          </div>
            <input className="submit" type="submit" value="+" />
        </form>
      </div>
    </div>
  )
}

export default IngredientForm;
