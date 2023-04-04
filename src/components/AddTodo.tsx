import { PlusCircle } from '@phosphor-icons/react';
import styles from './AddTodo.module.css';
import { ChangeEvent, useState } from 'react';

interface Props {
  onTaskSubmit: (task: string) => void;
}

export function AddTodo({ onTaskSubmit }: Props) {
  const [task, setTask] = useState('');

  const isButtonDisabled = task.length === 0;

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleTaskSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    onTaskSubmit(task);
    setTask('');
  }

  return (
    <form className={styles.addTodo} onSubmit={handleTaskSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="todo-input"
        value={task}
        onChange={handleTaskChange}
      />
      <button type="submit" disabled={isButtonDisabled}>
        Criar <PlusCircle size={24} weight="bold" />
      </button>
    </form>
  );
}
