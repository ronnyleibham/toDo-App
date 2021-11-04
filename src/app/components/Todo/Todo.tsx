import React from 'react';
import classes from './Todo.module.css';

type TodoProps = {
  isDone: boolean;
  title: string;
  description: string;
};

function Todo({ isDone, title, description }: TodoProps): JSX.Element {
  return (
    <div
      className={`${classes.todo} ${isDone ? classes.done : classes.notDone}`}
    >
      <h1 className={classes.h1}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Todo;
