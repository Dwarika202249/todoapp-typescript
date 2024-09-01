// src/App.tsx
import React, { Suspense } from 'react';

const TodoList = React.lazy(() => import('./components/TodoList'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList />
      </Suspense>
    </div>
  );
};

export default App;
