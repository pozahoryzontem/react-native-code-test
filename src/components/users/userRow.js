import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { userRowStyles } from './users.style';

const localImage = require('../../assets/images/defaultAvatar.jpg');

export default class UserRow extends React.PureComponent {
  constructor(props) {
    super(props);
    const { avatar } = this.props;
    this.state = {
      image: {
        uri: avatar,
      },
    };
  }

  onErrorImageLoad = () => {
    this.setState({ image: localImage });
  };

  render() {
    const { firstName, lastName } = this.props;
    const { image } = this.state;
    return (
      <View
        style={userRowStyles.container}
      >
        <Image
          source={image}
          onError={this.onErrorImageLoad}
          style={userRowStyles.image}
        />
        <Text
          style={userRowStyles.text}
        >
          {`${firstName} ${lastName}`}
        </Text>
      </View>
    );
  }
}

UserRow.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
UserRow.defaultProps = {
  avatar: '',
};
