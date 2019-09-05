import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions';
import actionTypes from '../../src/redux/actionTypes';
import I18n from '../../src/assets/i18n/i18n';
import * as httpService from '../../src/services/httpService';

jest.mock('../../src/services/httpService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  const initialState = {
    users: [
    ],
    alert: {},
    pageNumber: 1,
    canLoadUsers: true,
  };

  it('Should create action CAN_LOAD_USERS and ADDED_USERS when request succeed and there are no more pages to get users', async () => {
    httpService.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        page: 1,
        per_page: 6,
        total: 1,
        total_pages: 1,
        data: [{
          id: 1, email: 'test1@mail.com', first_name: 'testFristName1', last_name: 'testLastName1', avatar: 'testAvatar1.jpg',
        }],
      },
    }));

    const expectedActions = [
      { type: actionTypes.CAN_LOAD_USERS, payload: false },
      {
        type: actionTypes.ADDED_USERS,
        payload: [{
          id: 1, email: 'test1@mail.com', firstName: 'testFristName1', lastName: 'testLastName1', avatar: 'testAvatar1.jpg',
        }],
      },

    ];

    const store = mockStore(initialState);

    await store.dispatch(actions.getUsers());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should create action INCREMENTED_PAGE_NUMBER and ADDED_USERS when request succeed and there are more pages to get users', async () => {
    httpService.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        page: 1,
        per_page: 1,
        total: 2,
        total_pages: 2,
        data: [{
          id: 1, email: 'test1@mail.com', first_name: 'testFristName1', last_name: 'testLastName1', avatar: 'testAvatar1.jpg',
        }],
      },
    }));

    const expectedActions = [
      { type: actionTypes.INCREMENTED_PAGE_NUMBER, payload: 2 },
      {
        type: actionTypes.ADDED_USERS,
        payload: [{
          id: 1, email: 'test1@mail.com', firstName: 'testFristName1', lastName: 'testLastName1', avatar: 'testAvatar1.jpg',
        }],
      },
    ];

    const store = mockStore(initialState);

    await store.dispatch(actions.getUsers());

    expect(store.getActions()).toEqual(expectedActions);
  });


  it('Should create action DISPLAY_MESSAGE when request failed', async () => {
    httpService.get.mockImplementationOnce(() => new Error('testRequestError'));
    const expectedActions = [
      { type: actionTypes.DISPLAY_MESSAGE, payload: { message: I18n.t('USERS.ERROR.ERROR_LOADING_USERS') } },
    ];
    const store = mockStore(initialState);

    await store.dispatch(actions.getUsers());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should display message DISPLAY_MESSAGE when canLoadUsers is falsy', async () => {
    const store = mockStore({ canLoadUsers: false });

    const expectedActions = [
      { type: actionTypes.DISPLAY_MESSAGE, payload: { message: I18n.t('USERS.ERROR.NO_MORE_USERS') } },
    ];

    await store.dispatch(actions.getUsers());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
