var React = require('react');

var PitchSlider = React.createClass({

  getInitialState: function() {
    return { frequency: 440 }
  },

  handleChange: function( event ) {
    this.setState({
      frequency: event.target.value
    });
    this.props.onSliderChange( event.target.value )
  },

  render: function() {
    return (
      <div>
        <input 
          type="range" 
          min={0} 
          max={6000}
          step={10}
          defaultValue={this.state.frequency} 
          onChange={this.handleChange}/>
      </div>
    );
  }

});

module.exports = PitchSlider;