import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

function Todo({ todo, onClick }) {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default observer(Todo);
