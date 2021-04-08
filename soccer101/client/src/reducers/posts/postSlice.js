// Example from https://redux.js.org/tutorials/essentials/part-3-data-flow
// Slice that will contain data for our posts and put it in the store
const initialState = [
  { id: "1", title: "First post!", content: "Hello" },
  { id: "2", title: "Second post!", content: "Hello from second post" },
];

export default function postReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
