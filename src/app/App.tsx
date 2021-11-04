import React, { useState } from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';
import Form from './components/Form/Form';

function App(): JSX.Element {
  const [todos, setTodos] = useState([
    {
      title: 'Schuhe putzen',
      description: 'Sohle mit Zahnbürste',
      isDone: false,
    },
    {
      title: 'Wäsche waschen',
      description: 'angegilbte T-Shirts 90 Grad',
      isDone: true,
    },
    {
      title: 'Socken flicken',
      description: 'Pflaster vernähen geht nicht, Depp!',
      isDone: false,
    },
  ]);

  function handleSubmit(todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className={styles.App}>
      <Title>Deine ToDo Liste!</Title>
      <Form onSubmit={handleSubmit} />
      <ul>
        {todos.map((entry) => {
          return (
            <Todo
              title={entry.title}
              description={entry.description}
              isDone={entry.isDone}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
