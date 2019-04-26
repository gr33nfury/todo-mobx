import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleValueChange = event => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    addTodo(value);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleValueChange} value={value} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
