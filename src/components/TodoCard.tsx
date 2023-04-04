import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';
import styles from './TodoCard.module.css';

interface Props {
  id: number;
  isChecked?: boolean;
  task: string;
  onCheckTodo: (todoId: number) => void;
  onDeleteTodo: (todoId: number) => void;
}

export function TodoCard({
  isChecked = false,
  id,
  task,
  onCheckTodo,
  onDeleteTodo,
}: Props) {
  const checkedParagraphStyles = isChecked ? styles.checked : '';

  function handleCheckTodo() {
    onCheckTodo(id);
  }

  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  return (
    <li className={styles.todoCard}>
      <div>
        <button onClick={handleCheckTodo}>
          {isChecked ? (
            <CheckCircle
              size={24}
              className={styles.checkedIcon}
              weight="fill"
            />
          ) : (
            <Circle size={24} className={styles.circleIcon} />
          )}
        </button>
        <p className={checkedParagraphStyles}>{task}</p>
      </div>
      <button onClick={handleDeleteTodo}>
        <Trash size={24} className={styles.trashIcon} />
      </button>
    </li>
  );
}
