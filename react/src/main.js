import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './components/recipes/AppIndex';
import InstructionList from './components/instructions/InstructionList';


$(function() {
  let reactApp = document.getElementById('recipe-index');
  let reactSteps = document.getElementById('recipe-instructions');
  let reactStepForm = document.getElementById('react-form');

  if (reactApp) {
    ReactDOM.render(<AppIndex />, reactApp);
  }
   if (reactSteps) {
    ReactDOM.render(<InstructionList />, reactSteps);
  }
});
