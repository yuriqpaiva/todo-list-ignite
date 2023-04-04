import styles from './AddTodo.module.css';

export function AddTodo() {
  return (
    <div className={styles.addTodo}>
      <input
        type="text"
        placeholder="Adicionar novo todo"
        className="todo-input"
      />
      <button>Criar</button>
    </div>
  );
}
