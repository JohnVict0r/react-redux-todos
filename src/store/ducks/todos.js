/* Types */
const ADD_TODO = "ADD_TOD";

/* Actions Creators */
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

/* Reducers */
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: Math.random(),
          text: action.text
        },
        ...state
      ];
    default:
      return state;
  }
}
