import styles from './Todos.module.css';
import { TodoCard } from './TodoCard';
import { AddTodo } from './AddTodo';
import { useState } from 'react';
import { EmptyTodos } from './EmptyTodos';

interface TodoData {
  id: number;
  task: string;
  isChecked: boolean;
}

export function Todos() {
  const [todos, setTodos] = useState<TodoData[]>([]);

  function handleAddTodo(task: string) {
    const newTodo = {
      id: Date.now(),
      task,
      isChecked: false,
    };

    setTodos([...todos, newTodo]);
  }

  function handleCheckTodo(todoId: number) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isChecked = !todo.isChecked;
      }

      return todo;
    });

    setTodos(newTodos);
  }

  function handleDeleteTodo(todoId: number) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(newTodos);
  }

  return (
    <>
      <AddTodo onTaskSubmit={handleAddTodo} />
      <article className={styles.todos}>
        <header>
          <div>
            Tarefas criadas
            <span className={styles.counter}>0</span>
          </div>
          <div>
            Concluídas
            <span className={styles.counter}>0</span>
          </div>
        </header>
        <ul className={styles.content}>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoCard
                key={todo.id}
                id={todo.id}
                isChecked={todo.isChecked}
                task={todo.task}
                onCheckTodo={handleCheckTodo}
                onDeleteTodo={handleDeleteTodo}
              />
            ))
          ) : (
            <EmptyTodos />
          )}
        </ul>
      </article>
    </>
  );
}
