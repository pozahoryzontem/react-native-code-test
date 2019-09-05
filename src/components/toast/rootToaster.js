import React from 'react';
import Toast from 'react-native-easy-toast';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import config from '../../../config/config';

const mapStateToProps = (state) => ({ alert: state.alert });

class RootToasterConnected extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toastRef = React.createRef();
  }

  componentDidUpdate() {
    const { alert } = this.props;
    if (alert && alert.message) {
      this.toastRef.current.show(alert.message, config.toast.displayDuration);
    }
  }

  render() {
    return <Toast ref={this.toastRef} />;
  }
}

RootToasterConnected.propTypes = {
  alert: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

const RootToaster = connect(mapStateToProps)(RootToasterConnected);
export default RootToaster;
