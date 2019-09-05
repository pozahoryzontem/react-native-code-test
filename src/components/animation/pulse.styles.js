import { StyleSheet } from 'react-native';

export const pulseLoaderStyles = (circleSize) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: '#72b003',
  },
});

export const pulseStyles = StyleSheet.create({
  circleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  circle: {
    borderWidth: 4 * StyleSheet.hairlineWidth,
    borderColor: '#72b003',
    backgroundColor: '#72b003',
  },
});
