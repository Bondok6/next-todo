import Head from 'next/head';
import Navbar from '../components/Navbar';
import { table, minifyRecords } from './api/utils/Airtable';
import Todo from '../components/Todo';
import { TodosContext } from '../contexts/TodosContext';
import { useEffect, useContext } from 'react';
import TodoForm from '../components/TodoForm';

const Home = ({ initialTodos }) => {
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <>
      <Head>
        <title>Next Todo</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <h1 className="text-2xl text-center mb-4">My Todos</h1>
        <TodoForm />
        <ul>
          {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </ul>
      </main>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const todos = await table.select({}).firstPage();

    return {
      props: {
        initialTodos: minifyRecords(todos),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: 'Something went wrong',
      },
    };
  }
}
