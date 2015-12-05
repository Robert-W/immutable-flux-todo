import App from 'components/App';
import ReactDOM from 'react-dom';
import React from 'react';

let loadApp = function loadApp () {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (document.readyState === 'complete') {
  loadApp();
} else {
  window.onload = loadApp();
}
