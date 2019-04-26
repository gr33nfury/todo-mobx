import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function AddTodo({ addTodo, classes }) {
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
        <TextField
          className={classes.input}
          onChange={handleValueChange}
          value={value}
        />
        <Button
          className={classes.button}
          color="primary"
          type="submit"
          variant="contained"
        >
          <Typography>Add Todo</Typography>
        </Button>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTodo);
