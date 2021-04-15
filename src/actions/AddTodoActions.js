export const AddTodoAction = (todo) => (dispatch, getState) => {
  //redux thunk allows nested arrow function
  const {
    Todo: { todos },
  } = getState(); //accessing todos array state from Todo named reducer

  dispatch({
    type: "ADD_TODO",
    payload: [todo, ...todos],
  });
};
