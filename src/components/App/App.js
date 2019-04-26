import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { values } from 'mobx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import TodoCounterView from '../TodoCounterView/TodoCounterView';

let id = 0;
const randomId = () => id++;

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '1 1 auto',
    margin: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    maxWidth: 900,
    height: '100%',
  },
});

function App({ classes, store }) {
  const addTodo = value => {
    store.addTodo(randomId(), value);
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.root}>
        <Grid container justify="center" spacing={24}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <AddTodo addTodo={addTodo} />
            </Grid>
            <Grid item xs={12}>
              <TodoList todos={values(store.todos)} />
            </Grid>
            <Grid item xs={12}>
              <TodoCounterView store={store} />
            </Grid>
          </Paper>
        </Grid>
      </main>
    </>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(observer(App));
