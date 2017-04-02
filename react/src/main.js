import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './components/recipes/AppIndex';
import InstructionList from './components/instructions/InstructionList';
import IngredientList from './components/ingredients/IngredientList';


$(function() {
  let reactApp = document.getElementById('recipe-index');
  let reactSteps = document.getElementById('recipe-instructions');
  let reactIngredients = document.getElementById('recipe-ingredients';)

  if (reactApp) {
    ReactDOM.render(<AppIndex />, reactApp);
  }
   if (reactSteps) {
    ReactDOM.render(<InstructionList />, reactSteps);
  }
  if (reactIngredients) {
    ReactDOM.render(<IngredientList />, reactIngredients);
  }
});
