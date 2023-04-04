import { ClipboardText } from '@phosphor-icons/react';
import styles from './EmptyTodos.module.css';

export function EmptyTodos() {
  return (
    <li className={styles.emptyTodos}>
      <ClipboardText size={56} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas e
        organize seus itens a fazer
      </p>
    </li>
  );
}
