import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './components/AppIndex';
import GetInstructions from './components/GetInstructions';

$(function() {
  let reactApp = document.getElementById('recipe-index');
  let reactSteps = document.getElementById('recipe-instructions');

  if (reactApp) {
    ReactDOM.render(<AppIndex />, reactApp);
  } else if (reactSteps) {
    ReactDOM.render(<GetInstructions />, reactSteps)
  }
});
