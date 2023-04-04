import { PlusCircle } from '@phosphor-icons/react';
import styles from './AddTodo.module.css';

export function AddTodo() {
  return (
    <div className={styles.addTodo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="todo-input"
      />
      <button>
        Criar <PlusCircle size={24} weight="bold" />
      </button>
    </div>
  );
}
