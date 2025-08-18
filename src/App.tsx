import React, { useState, useEffect } from 'react';
import './App.css';

// Todo型定義
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // ローカルストレージからデータを読み込み
  useEffect(() => {
    const savedTodos: string | null = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos: Todo[] = JSON.parse(savedTodos);
        setTodos(parsedTodos);
      } catch (error) {
        console.error('ローカルストレージの読み込みエラー:', error);
      }
    }
  }, []);

  // todos が変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Todo追加機能
  const addTodo = (): void => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue(''); // 入力欄をクリア
    }
  };

  // Todo削除機能
  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Todo完了切り替え機能
  const toggleComplete = (id: number): void => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Enterキーで追加
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎯 Todo アプリ</h1>

        {/* Todo入力エリア */}
        <div className="todo-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="新しいタスクを入力..."
            className="todo-input"
          />
          <button onClick={addTodo} className="add-button">
            追加
          </button>
        </div>

        {/* Todo統計 */}
        <div className="todo-stats">
          <p>全体: {todos.length}件 | 完了: {todos.filter(t => t.completed).length}件 | 未完了: {todos.filter(t => !t.completed).length}件</p>
        </div>

        {/* Todoリスト */}
        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">タスクがありません。新しいタスクを追加してください！</p>
          ) : (
            todos.map((todo: Todo) => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-content">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="todo-checkbox"
                  />
                  <span className="todo-text">{todo.text}</span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-button"
                >
                  削除
                </button>
              </div>
            ))
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
