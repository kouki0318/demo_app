// Todo型定義
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// Todo操作関数の型定義
export type TodoAction = {
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
    toggleCompleted: (id: number) => void;
}
