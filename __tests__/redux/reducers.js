import reducer from '../../src/redux/reducers';
import actionTypes from '../../src/redux/actionTypes';

describe('Users Reducer', () => {
  const initialState = {
    users: [
    ],
    alert: {},
    pageNumber: 1,
    canLoadUsers: true,
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_MESSAGE', () => {
    expect(
      reducer({}, {
        type: actionTypes.DISPLAY_MESSAGE,
        payload: { message: 'testMessage' },
      }),
    ).toEqual({ alert: { message: 'testMessage' } });
  });

  it('should handle INCREMENTED_PAGE_NUMBER', () => {
    expect(
      reducer({ pageNumber: 1 }, {
        type: actionTypes.INCREMENTED_PAGE_NUMBER,
        payload: 2,
      }),
    ).toEqual({ pageNumber: 2 });
  });
  it('should handle CAN_LOAD_USERS', () => {
    expect(
      reducer({ canLoadUsers: true }, {
        type: actionTypes.CAN_LOAD_USERS,
        payload: false,
      }),
    ).toEqual({ canLoadUsers: false });
  });
  it('should handle CAN_LOAD_USERS', () => {
    expect(
      reducer({ users: [] }, {
        type: actionTypes.ADDED_USERS,
        payload: [{
          id: 1, email: 'test1@mail.com', firstName: 'testFristName1', lastName: 'testLastName1', avatar: 'testAvatar1.jpg',
        }],
      }),
    ).toEqual({
      users: [{
        id: 1, email: 'test1@mail.com', firstName: 'testFristName1', lastName: 'testLastName1', avatar: 'testAvatar1.jpg',
      }],
    });
  });
});
