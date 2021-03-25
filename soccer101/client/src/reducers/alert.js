//Takes in a piece of state that has to do with alerts and actions
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState = [];

export default function states(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
