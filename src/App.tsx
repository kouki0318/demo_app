import React, { useState, useEffect } from "react";
import "./App.css";
import { Todo } from "./types/Todo";
import TodoInput from "./components/TodoInput";
import TodoStats from "./components/TodoStats";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // ローカルストレージからデータを読み込み
  useEffect(() => {
    const savedTodos: string | null = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        const parsedTodos: Todo[] = JSON.parse(savedTodos);
        setTodos(parsedTodos);
      } catch (error) {
        console.error("ローカルストレージの読み込みエラー:", error);
      }
    }
  }, []);

  // todos が変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Todo追加機能
  const handleAddTodo = (text: string): void => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Todo削除機能
  const handleDeleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Todo完了切り替え機能
  const handleToggleComplete = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎯 Todo アプリ</h1>

        {/* Todo入力エリア */}
        <TodoInput onAddTodo={handleAddTodo} />

        {/* Todo統計 */}
        <TodoStats todos={todos} />

        {/* Todoリスト */}
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
      </header>
    </div>
  );
}

export default App;
