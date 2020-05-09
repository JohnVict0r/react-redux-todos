import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const todos = useSelector(state => state.todos);

  return <p>Você tem {todos.length} itens na lista.</p>;
};

export default Counter;
