"use client"

import { useState } from 'react'

// 定义Todo项的接口
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 定义组件的props接口
interface TodoListProps {
  initialTodos?: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ initialTodos = [] }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodoText, setNewTodoText] = useState<string>('');

  // 添加新的Todo项
  const addTodo = () => {
    if (newTodoText.trim() === '') return;
    
    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  // 切换Todo项的完成状态
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 删除Todo项
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todoContainer">
      <h3>待办事项列表</h3>
      
      <div className="addTodo">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="添加新的待办事项..."
          className="todoInput"
        />
        <button onClick={addTodo} className="todoButton">添加</button>
      </div>
      
      <ul className="todoList">
        {todos.map(todo => (
          <li key={todo.id} className="todoItem">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="deleteButton"
            >
              删除
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="emptyMessage">暂无待办事项</p>
      )}
    </div>
  );
}; 