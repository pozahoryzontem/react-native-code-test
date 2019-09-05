import actionTypes from './actionTypes';
import I18n from '../assets/i18n/i18n';
import UrlBuilder from '../helpers/urlBuilder';
import config from '../../config/config';
import { get as httpGet } from '../services/httpService';

const addUsersAction = (payload) => ({ type: actionTypes.ADDED_USERS, payload });

const incrementPageNumberAction = (payload) => ({
  type: actionTypes.INCREMENTED_PAGE_NUMBER,
  payload,
});

const canLoadUsersAction = (payload) => ({ type: actionTypes.CAN_LOAD_USERS, payload });

const displayMessage = (payload) => ({ type: actionTypes.DISPLAY_MESSAGE, payload });

const checkRequestState = (pageNumber, totalPageNumber, dispatch) => {
  if (pageNumber >= totalPageNumber) {
    dispatch(canLoadUsersAction(false));
  } else {
    dispatch(incrementPageNumberAction(pageNumber + 1));
  }
};

const mapUsers = (users) => users.map((user) => ({
  id: user.id,
  firstName: user.first_name,
  lastName: user.last_name,
  email: user.email,
  avatar: user.avatar,
}));

const getUsers = () => async (dispatch, getState) => {
  try {
    const { canLoadUsers, pageNumber } = getState();
    if (canLoadUsers) {
      const url = new UrlBuilder(config.users.baseUrl)
        .users()
        .page(pageNumber).perPageLimit(config.users.perPageLimit)
        .build();

      const response = await httpGet(url);
      checkRequestState(pageNumber, response.data.total_pages, dispatch);
      const users = mapUsers(response.data.data);
      dispatch(addUsersAction(users));
    } else {
      dispatch(displayMessage({ message: I18n.t('USERS.ERROR.NO_MORE_USERS') }));
    }
  } catch (error) {
    dispatch(displayMessage({ message: I18n.t('USERS.ERROR.ERROR_LOADING_USERS') }));
  }
};

export {
  addUsersAction, incrementPageNumberAction, canLoadUsersAction, displayMessage, getUsers,
};
