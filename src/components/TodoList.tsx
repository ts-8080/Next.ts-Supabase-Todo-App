import { Todo } from "@/utils/interface";
import { deleteTodo, getAllTodos } from "@/utils/supabaseFunc";
import React from "react";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<any>;
};

export const TodoList = (props: Props) => {
  const { todos, setTodos } = props;

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    let todos = await getAllTodos();
    setTodos(todos);
  };

  return (
    <div>
      <ul className="mx-auto">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex bg-slate-600 rounded-lg mt-2 mb-2 p-1 justify-between"
          >
            <li className="font-medium">☑ {todo.title}</li>
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              ☒
            </span>
          </div>
        ))}

        {/* <div className="flex bg-slate-600 rounded-lg mt-2 mb-2 p-1 justify-between">
          <li className="font-medium">☑ 散歩</li>
          <span className="cursor-pointer">☒</span>
        </div>
        <div className="flex bg-slate-600 rounded-lg mt-2 mb-2 p-1 justify-between">
          <li className="font-medium">☑ ジム</li>
          <span className="cursor-pointer">☒</span>
        </div> */}
      </ul>
    </div>
  );
};
