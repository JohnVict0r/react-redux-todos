import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo } from "../store/ducks/todos";

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addNewTodo = () => {
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
      />
      <button onClick={addNewTodo}>Novo todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
