// src/components/TodoItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = React.useCallback(() => {
    dispatch(toggleTodo(id));
  }, [dispatch, id]);

  const handleDelete = React.useCallback(() => {
    dispatch(deleteTodo(id));
  }, [dispatch, id]);

  return (
    <li
      className={`flex justify-between items-center p-2 mb-2 rounded-lg ${
        completed ? 'bg-gray-200 line-through' : 'bg-white'
      } shadow-md`}
    >
      <span className="text-lg">{text}</span>
      <div>
        <button
          className={`px-3 py-1 mr-2 rounded-full ${
            completed ? 'bg-yellow-500' : 'bg-green-500'
          } text-white`}
          onClick={handleToggle}
        >
          {completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded-full"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
});

export default TodoItem;
