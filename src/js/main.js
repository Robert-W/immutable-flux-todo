import TodoApp from 'components/TodoApp';
import ReactDOM from 'react-dom';
import React from 'react';

let loadApp = function loadApp () {
  ReactDOM.render(<TodoApp />, document.getElementById('root'));
};

if (document.readyState === 'complete') {
  loadApp();
} else {
  window.onload = loadApp();
}
