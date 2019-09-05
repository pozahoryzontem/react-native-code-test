import React from 'react';
import { View, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { pulseStyles } from './pulse.styles';

export default class Pulse extends React.PureComponent {
  constructor(props) {
    super(props);

    this.anim = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const { duration } = this.props;
    this.anim.setValue(0);
    Animated.timing(this.anim, {
      toValue: 1,
      duration,
      easing: Easing.in,
    }).start(this.animate.bind(this));
  }

  render() {
    const { pulseSize, startSize } = this.props;
    return (
      <View style={[pulseStyles.circleWrapper, {
        width: pulseSize,
        height: pulseSize,
        marginLeft: -pulseSize / 2,
        marginTop: -pulseSize / 2,
      },
      ]}
      >
        <Animated.View
          style={[pulseStyles.circle, {
            width: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [startSize, pulseSize],
            }),
            height: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [startSize, pulseSize],
            }),
            borderRadius: pulseSize / 2,
            opacity: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.3, 0],
            }),
          }]}
        />
      </View>
    );
  }
}

Pulse.propTypes = {
  pulseSize: PropTypes.number.isRequired,
  startSize: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};
