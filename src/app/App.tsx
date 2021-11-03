import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Title>Das ist der Titel...</Title>
      <Todo
        isDone={true}
        title={'Schuhe putzen'}
        description={'Alle Schuhe du fauler Sack!'}
      ></Todo>
    </div>
  );
}

export default App;
