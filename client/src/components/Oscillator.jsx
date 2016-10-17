var React = require('react');

var Oscillator = React.createClass({

  getInitialState: function() {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    var osc = audioCtx.createOscillator();
    osc.connect(audioCtx.destination);

    osc.type = this.props.waveform;
    osc.frequency.value = this.props.frequency;
    osc.start();
    return { osc: osc };
  },

  render: function(){
    
    this.state.osc.frequency.value = this.props.frequency;

    return (
      <div>
      <h3>I am an Oscillator.</h3>
      <p>My frequency is {this.props.frequency}Hz.</p>
      </div>
    )

    // return null;
  }

});

module.exports = Oscillator;