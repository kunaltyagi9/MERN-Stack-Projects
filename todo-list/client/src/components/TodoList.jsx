import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllTodo, toggleTodo, deleteTodo, toggleTab } from '../redux/actions';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_DONE } from '../redux/actions/types';

// components
import Tabs from './Tabs';
import Task from './Task';

const TodoList = () => {

  const dispatch = useDispatch();

  const currentTab = useSelector(state => state.currentTab);
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  const getTodos = () => {
    if (currentTab === SHOW_ALL) {
      return todos;
    } else if (currentTab === SHOW_ACTIVE) {
      return todos.filter(todo => !todo.done);
    } else if (currentTab === SHOW_DONE) {
      return todos.filter(todo => todo.done);
    }
    return todos;
  }

  const removeComplete = () => {
    todos.forEach(({ done, _id }) => {
      if (done) dispatch(deleteTodo(_id));
    });
  };

  return (
    <article>
      <div className='message'>{todos.filter(todo => !todo.done).length} pending todos</div>

      <div>
        <Tabs currentTab={currentTab} />

        {
          todos.some(todo => todo.done) ? (
            <button className="button clear" onClick={removeComplete}>
              Remove Done Todos
            </button>
          ) : null
        }
      </div>

      <ul className="list">
        {
          getTodos().map(todo => (
            <Task
              key={todo._id}
              id={todo._id}
              name={todo.name}
              done={todo.done}
              toggleTodo={() => dispatch(toggleTodo(todo._id))}
              deleteTodo={() => dispatch(deleteTodo(todo._id))}
            />
          ))
        }
      </ul>
    </article>
  );
}

export default TodoList;
