import React from "react";

import { useState } from "react";

function TodoList() {
  const [Task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleClick = () => {
    setTodo([ Task,...todo]);
  };

  return (
    <>
      <h1>Todo</h1>
      <div>
        <input
          type={"text"}
          value={Task}
          placeholder="Enter Your Task Here"
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClick}>
          add
        </button>
        {todo.map((item) => {
          return (
            <>
              <div className="result">
                <h3>{item}</h3>
                <div></div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default TodoList;
