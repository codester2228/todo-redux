import React from "react";
import { useSelector } from "react-redux";
function TodoScreen({ match }) {
  const Todo = useSelector((state) => state.Todo); //reducer name was Todo
  const { todos } = Todo; //extracting todos array from Todo
  const t = todos.find((t) => t.id.toString === match.params.id.toString);
  console.log(match.params.id);
  return (
    <div>
      <h1>Successfully Added to List!</h1>
      <h3>Title: {t.title} </h3>
      <h3>Description: {t.description} </h3>
      <h3>Due Date: {t.date} </h3>
      <h3>Status: {t.status} </h3>
    </div>
  );
}

export default TodoScreen;
