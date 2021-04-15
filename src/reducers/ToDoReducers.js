export const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: action.payload };
    default:
      return state;
  }
}; //exported this reducer to be used in store.js

export const DarkThemeReducer = (state = { darktheme: false }, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return { darktheme: action.payload };
    default:
      return state;
  }
}; //exported this reducer to be used in store.js
