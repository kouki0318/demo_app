import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = (): void => {
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue.trim());
      setInputValue(''); // 入力欄をクリア
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="新しいタスクを入力..."
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="add-button">
        追加
      </button>
    </div>
  );
};

export default TodoInput;
