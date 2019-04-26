import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Todo from '../Todo/Todo';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onClick={todo.toggle} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default observer(TodoList);
