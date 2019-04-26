import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Todo({ todo, onClick }) {
  return (
    <ListItem
      onClick={onClick}
      role={undefined}
      dense
      button
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
      <ListItemText primary={todo.text} />
    </ListItem>
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
