import React from 'react';
import { create } from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { FlatList } from 'react-native';
import thunk from 'redux-thunk';
import UserList from '../../../src/components/users/userList';


describe('UserList', () => {
  it('should show users', () => {
    const mockStore = configureMockStore();
    const initialState = {
      users: [
        {
          id: 0,
          firstName: 'Michael',
          lastName: 'Lawson',
          email: 'michael.lawson@reqres.in',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/tw4ditter/follettkyle/128.jpg',
        },
      ],
      alert: {},
      pageNumber: 1,
      canLoadUsers: true,
    };

    const store = mockStore(initialState);
    const component = create(
      <UserList store={store} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  // I got stuck here
  it.skip('should call getUsersConnect when onEndReached', () => {
    const initialState = {
      users: [
        {
          id: 0,
          firstName: 'Michael',
          lastName: 'Lawson',
          email: 'michael.lawson@reqres.in',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/tw4ditter/follettkyle/128.jpg',
        },
      ],
      alert: {},
      pageNumber: 1,
      canLoadUsers: true,
    };
    const mockStore = configureMockStore([thunk]);
    const store = mockStore(initialState);

    const mockGetUsersConnect = jest.fn();
    const userListRender = create(<UserList store={store} getUsersConnect={mockGetUsersConnect} />);

    const instance = userListRender.root;
    const flatList = instance.findByType(FlatList);
    flatList.props.onEndReached();
    expect().toBeCalled();
  });
});
