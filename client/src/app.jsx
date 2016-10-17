var React = require('react');
var ReactDOM = require('react-dom');

var VCO = require('./components/VCO');

window.onload = function(){
  ReactDOM.render(
    <VCO />,
    document.getElementById('app')
  );
}
