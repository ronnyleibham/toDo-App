// import type { ReactNode } from 'react';
import React, { useState } from 'react';
import classes from './Form.module.css';

// type FormProps = {
//   //   children: ReactNode;
//   //   inputTitle: string;
//   //   imputDescription: string;
// };

type FormProps = {
  onSubmit: (todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) => void;
};

function Form({ onSubmit }: FormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ title, description, isDone: false });
    setTitle('');
    setDescription('');
  }

  return (
    <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="titel">Titel</label>
      <input
        className={classes.input}
        type="text"
        name="titel"
        id="titel"
        placeholder="Titel here"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        rows={5}
        className={classes.textarea}
        name="description"
        id="description"
        placeholder="Description here"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <input className={classes.sendButton} type="submit" />
    </form>
  );
}

export default Form;
