import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserRow from './userRow';
import { getUsers } from '../../redux/actions';
import { separatorStyles, userListStyles } from './users.style';
import I18n from '../../assets/i18n/i18n';

const mapStateToProps = (state) => ({ users: state.users });

const mapDispatchToProps = (dispatch) => ({
  getUsersConnect: () => dispatch(getUsers()),
});

class UserListConnected extends React.PureComponent {
  constructor(props) {
    super(props);

    this.threshold = 0.0001;
  }

  handleLoadMore = () => {
    const { getUsersConnect } = this.props;
    getUsersConnect();
  };

  keyExtractor = (item) => item.id.toString();

  renderSeparator = () => (
    <View
      style={separatorStyles.separator}
    />
  );

  renderUserRow = ({ item }) => (
    <UserRow
      firstName={item.firstName}
      lastName={item.lastName}
      avatar={item.avatar}
    />
  );

  render() {
    const { users } = this.props;
    return (
      <View style={userListStyles.container}>
        {
           !!users.length
            && (
            <FlatList
              keyExtractor={this.keyExtractor}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={this.threshold}
              data={users}
              ItemSeparatorComponent={this.renderSeparator}
              renderItem={this.renderUserRow}
            />
            )
         }
      </View>
    );
  }
}
UserListConnected.navigationOptions = {
  title: I18n.t('USERS.TITLE'),
};
UserListConnected.propTypes = {
  getUsersConnect: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })).isRequired,
};

const UserList = connect(mapStateToProps, mapDispatchToProps)(UserListConnected);
export default UserList;
