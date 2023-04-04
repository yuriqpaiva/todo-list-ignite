import { AddTodo } from './components/AddTodo';
import { Header } from './components/Header';
import './styles/globals.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <AddTodo />
      </main>
    </>
  );
}

export default App;
