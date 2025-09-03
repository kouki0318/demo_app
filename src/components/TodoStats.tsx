import React from 'react';
import { Todo } from '../types/Todo';

interface TodoStatsProps {
  todos: Todo[];
}

const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const totalCount = todos.length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = totalCount - completedCount;

  return (
    <div className="todo-stats">
      <p>
        合計: {totalCount}件 |
        完了: {completedCount}件 |
        未完了: {pendingCount}件
      </p>
    </div>
  );
};

export default TodoStats;
