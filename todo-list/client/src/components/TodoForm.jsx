import React, { useState } from 'react';

import { useDispatch } from 'react-redux'; 
import { addNewTodo } from '../redux/actions';

const TodoForm = () => {
  
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));
    setText('');
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="input"
        value={text}
        onChange={onInputChange}
        placeholder="Enter new todo..."
      />
    </form>
  );
}

export default TodoForm;