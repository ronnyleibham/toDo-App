import type { ReactNode } from 'react';
import React from 'react';
import classes from './Todo.module.css';

type TodoProps = {
  isDone: boolean;
  title: string;
  description: string;
};

function Todo({ isDone, title, description }: TodoProps): JSX.Element {
  if (isDone) {
    return (
      <div className={classes.div_true}>
        <h1 className={classes.h1}>{title}</h1>
        <p>{description}</p>
      </div>
    );
  } else {
    return (
      <div className={classes.div_false}>
        <h1 className={classes.h1}>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default Todo;
