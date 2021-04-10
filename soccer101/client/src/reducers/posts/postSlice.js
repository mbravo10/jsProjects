// Example from https://redux.js.org/tutorials/essentials/part-3-data-flow
// Slice that will contain data for our posts and put it in the store
import { CURRENT_POSTS } from "../../actions/types";
const initialState = [];

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_POSTS:
      return [...state, ...payload];
    default:
      return state;
  }
}
