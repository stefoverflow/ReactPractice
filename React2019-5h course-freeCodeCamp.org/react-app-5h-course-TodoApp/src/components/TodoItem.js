import React from "react";
import "../App.css";

function TodoItem(props) {
  const item = props.item;
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => props.checkItem(item)}
      />
      <p style={item.completed ? completedStyle : null}>{item.text}</p>
    </div>
  );
}

export default TodoItem;
