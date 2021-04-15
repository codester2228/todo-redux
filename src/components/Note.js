import React from "react";

function Note(props) {
  return (
    <div className="note">
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.due}</p>
      <p>{props.status}</p>
    </div>
  );
}

export default Note;
