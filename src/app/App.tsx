import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Title>Das ist der Titel...</Title>
    </div>
  );
}

export default App;
