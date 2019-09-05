import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserList from '../components/users/userList';
import Intro from '../components/animation/intro';
import { defaultNavigationOptions, headerLayoutPreset } from './navigator.style';

const Users = createAppContainer(createStackNavigator({
  UsersList: UserList,
}, { headerLayoutPreset, defaultNavigationOptions }));

const Navigator = createAppContainer(createSwitchNavigator(
  {
    Intro,
    Users,
  },
  {
    initialRouteName: 'Intro',
  },
));

export default Navigator;
