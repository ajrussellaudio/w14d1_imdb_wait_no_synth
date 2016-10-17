var React = require('react');

var PitchSlider = require('./PitchSlider');
var Oscillator = require('./Oscillator');

var VCO = React.createClass({

  getInitialState: function() {
    return { frequency: 440 };
  },

  handleSliderChange: function( frequency ) {
    this.setState({ frequency: frequency })
  },

  render: function() {
    return(
      <div className="vco">
        <PitchSlider
          onSliderChange={this.handleSliderChange} />
        <Oscillator
          waveform="sine" 
          frequency={this.state.frequency}/>
      </div>
    )
  }

})

module.exports = VCO;