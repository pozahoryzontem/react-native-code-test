import React from 'react';
import { View } from 'react-native';
import Pulse from './pulse';
import { pulseLoaderStyles } from './pulse.styles';

export default class LocationPulseLoader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.circleSize = 20;
    this.showSecondPulseTimeout = 1500;
    this.duration = 3000;
    this.pulseSize = this.circleSize * 8;
    this.firstPulseStartSize = this.circleSize * 2;
    this.secondPulseStartSize = this.circleSize * 4;
    this.style = pulseLoaderStyles(this.circleSize);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, this.showSecondPulseTimeout);
  }

  render() {
    const { show } = this.state;

    return (
      <View style={this.style.container}>
        <View
          style={this.style.circle}
        />
        <Pulse
          pulseSize={this.pulseSize}
          startSize={this.firstPulseStartSize}
          duration={this.duration}
        />
        {show
          && (
          <Pulse
            pulseSize={this.pulseSize}
            startSize={this.secondPulseStartSize}
            duration={this.duration}
          />
          )}
      </View>
    );
  }
}
