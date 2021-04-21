/*
 * A reducer function takes two arguments, the current state and an actions and returns based on both arguments, a new state
 * We could change the name of the first argument to make it more readable
 * There is immutable state that needs to be copied and updated rather than updated from the state directly
 * Payload is additional information needed to change the state
 * Takes in a piece of state that has to do with alerts and actions
 */
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState = [];

export default function alertReducer(state = initialState, action) {
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
