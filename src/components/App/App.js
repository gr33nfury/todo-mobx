import React from 'react';
import { observer } from 'mobx-react';
import { values } from 'mobx';

import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import './App.css';
import TodoCounterView from '../TodoCounterView/TodoCounterView';

let id = 0;
const randomId = () => id++;

function App({ store }) {
  const addTodo = value => {
    store.addTodo(randomId(), value);
  };

  return (
    <div className="App">
      <main>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={values(store.todos)} />
        <TodoCounterView store={store} />
      </main>
    </div>
  );
}

export default observer(App);
