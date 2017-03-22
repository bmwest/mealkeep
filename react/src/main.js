import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './components/AppIndex'

$(function() {
  ReactDOM.render(
    <AppIndex />,
    document.getElementById('recipe-index')
  );
});
