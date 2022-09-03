import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { updateTodo } from '../redux/actions';

const Task = ({ id, name, toggleTodo, done, deleteTodo }) => {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(name);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing(prevState => !prevState);

    dispatch(updateTodo(id, text));
  };

  return (
    <li
      className="task"
      style={{
        textDecoration: done ? 'line-through' : '',
        color: done ? '#bdc3c7' : '#34495e'
      }}
      onClick={() => toggleTodo()}
    >
      <span style={{ display: editing ? 'none' : '' }}>{name}</span>

      <form
        className="form"
        style={{ display: editing ? 'inline' : 'none' }}
        onSubmit={onFormSubmit}
      >
        <input
          className="edit-todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span className="icon" onClick={() => deleteTodo()}>
        <i className="fas fa-trash" />
      </span>
      <span className="icon edit" onClick={() => setEditing(prevState => !prevState)}>
        <i className="fas fa-pen" />
      </span>
    </li>
  );
}

export default Task;
