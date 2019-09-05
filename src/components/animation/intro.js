import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PulseLoader from './pulseLoader';
import { getUsers } from '../../redux/actions';
import config from '../../../config/config';

const mapDispatchToProps = (dispatch) => ({
  getUsersConnect: () => dispatch(getUsers()),
});

class IntroConnected extends React.PureComponent {
  componentDidMount() {
    const { getUsersConnect, navigation } = this.props;
    getUsersConnect();
    setTimeout(() => {
      navigation.navigate('Users');
    }, config.animation.displayDuration);
  }

  render() {
    return (
      <PulseLoader />
    );
  }
}
IntroConnected.propTypes = {
  getUsersConnect: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const Intro = connect(null, mapDispatchToProps)(IntroConnected);
export default Intro;
