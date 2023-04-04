import { AddTodo } from './components/AddTodo';
import { Header } from './components/Header';
import { Todos } from './components/Todos';
import './styles/globals.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Todos />
      </main>
    </>
  );
}

export default App;
