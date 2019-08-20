import { FILTER_NAT, FILTER_SEARCH, SET_USERS } from "../actionTypes";

const initialState = {
  allUsers: [],
  initial: true,
  filter: "",
  unfiltered: [],
  nat: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      {
        if (state.initial) {
          return {
            allUsers: action.payload.content,
            inital: false,
            unfiltered: action.payload.content
          };
        } else
          return {
            allUsers: state.allUsers.concat(action.payload.content),
            unfiltered: state.allUsers.concat(action.payload.content)
          };
      }
      break;
    case FILTER_SEARCH:
      {
        return { ...state, filter: action.payload.content };
      }
      break;
    case FILTER_NAT:
      {
        if (!state.nat) {
          return {
            ...state,
            nat: [].concat(action.payload.content)
          };
        } else if (!state.nat.includes(action.payload.content)) {
          return {
            ...state,
            nat: state.nat.concat(action.payload.content)
          };
        } else if (state.nat.includes(action.payload.content)) {
          return {
            ...state,
            nat: state.nat.filter(x => x !== action.payload.content)
          };
        }
      }
      break;
    default:
      return state;
  }
}
