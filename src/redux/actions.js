import { FILTER_NAT, SET_USERS, FILTER_SEARCH } from "./actionTypes";

export const setUsers = content => ({
  type: SET_USERS,
  payload: {
    content
  }
});

export const filterSearch = content => ({
  type: FILTER_SEARCH,
  payload: {
    content
  }
});

export const filterNat = content => ({
  type: FILTER_NAT,
  payload: {
    content
  }
});
