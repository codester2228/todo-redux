import React, { useState } from "react";
import { PrimaryButton, TextField } from "@fluentui/react";
import Calendar from "./Calendar.js";
import DropDown from "./DropDown.js";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction } from "../actions/AddTodoActions.js";
import { useHistory } from "react-router-dom";
import Note from "./Note.js";

function InputArea() {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    status: "",
  });
  const [count, setCount] = useState(0);

  function handleChange(event) {
    var input = event.target.name;
    var inputValue = event.target.value;
    return setTodo(function (prevtodo) {
      var newtodo = { ...prevtodo, [input]: inputValue };
      console.log(newtodo);
      return newtodo;
    });
  }

  function handleChangedropdown(value) {
    var input = "status";
    var inputValue = value;
    return setTodo(function (prevtodo) {
      var newtodo = { ...prevtodo, [input]: inputValue };
      console.log(newtodo);
      return newtodo;
    });
  }

  function handleChangedate(value) {
    var input = "date";
    var inputValue = value;
    return setTodo(function (prevtodo) {
      var newtodo = { ...prevtodo, [input]: inputValue };
      console.log(newtodo);
      return newtodo;
    });
  }
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo); //reducer name was Todo,useselector to select our state
  const { todos } = Todo; //extracting todos array from Todo

  let history = useHistory();

  const redirect = () => {
    console.log(todo);
    history.push("/" + todo.id);
    setTodo({
      id: "",
      title: "",
      description: "",
      date: "",
      status: "",
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(count);
    let _id = Math.floor(Math.random() * 1000 + 1);
    let i = 0;
    while (i < todos.length) {
      for (i = 0; i < todos.length; i++) {
        if (todos[i].id === _id) {
          _id = Math.floor(Math.random() * 1000 + 1);
          break;
        }
      }
    }
    todo.id = _id.toString();
    dispatch(AddTodoAction(todo));

    redirect();
  }

  function printNotes(item) {
    return (
      <Note
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        due={item.date}
        status={item.status}
      />
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          placeholder="Please enter title here"
          required
          value={todo.title}
          onChange={handleChange}
        />
        <TextField
          name="description"
          label="Description"
          placeholder="Please enter description here"
          multiline
          autoAdjustHeight
          required
          value={todo.description}
          onChange={handleChange}
        />
        <Calendar onChange={handleChangedate} />
        <DropDown onChange={handleChangedropdown} />

        <PrimaryButton
          text="Save"
          type="submit"
          className="btn-save"
          disabled={todo.title === "" || todo.description === ""}
          onClick={() => setCount(count + 1)}
        />
      </form>

      {todos && todos.map(printNotes)}
    </>
  );
}

export default InputArea;
