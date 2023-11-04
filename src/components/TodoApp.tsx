"use client";

import React, { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { addTodo, getAllTodos } from "@/utils/supabaseFunc";

const TodoApp = () => {
  const [todos, setTodos] = useState<any>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    };
    getTodos();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (title === "") return;

    await addTodo(title);
    let todos = await getAllTodos();
    setTodos(todos);
    
    setTitle("");
  };

  return (
    <section className="text-center mb-2 text-3xl font-medium">
      <h1>Supabase Todo App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="shadow-lg p-1 outline-none rounded-lg bg-gray-400  "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="shadow-md border-2 p-1 rounded-lg bg-gray-500">
          Add
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos}/>
    </section>
  );
};

export default TodoApp;
