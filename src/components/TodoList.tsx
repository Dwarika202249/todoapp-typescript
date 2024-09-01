// src/components/TodoList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addTodo } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-4 text-indigo-600">To-Do List</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
