import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './components/recipes/AppIndex';
import GetInstructions from './components/recipes/GetInstructions';
import ReactBreakfast from './components/breakfast/ReactBreakfast';

$(function() {
  let reactApp = document.getElementById('recipe-index');
  let reactSteps = document.getElementById('recipe-instructions');
  let reactBreakfast = document.getElementById('breakfast-index');

  if (reactApp) {
    ReactDOM.render(<AppIndex />, reactApp);
  } else if (reactSteps) {
    ReactDOM.render(<GetInstructions />, reactSteps)
  } else if (reactBreakfast) {
    ReactDOM.render(<ReactBreakfast />, reactBreakfast)
  }
});
