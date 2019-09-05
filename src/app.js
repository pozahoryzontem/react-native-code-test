import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Navigator from './navigator/navigator';
import store from './redux/store';
import RootToaster from './components/toast/rootToaster';


export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigator />
          <RootToaster />
        </View>
      </Provider>
    );
  }
}
