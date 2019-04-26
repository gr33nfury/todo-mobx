import { types } from 'mobx-state-tree';
import { values } from 'mobx';

const Todo = types
  .model({
    id: types.identifierNumber,
    text: types.optional(types.string, ''),
    completed: types.optional(types.boolean, false),
  })
  .actions(self => ({
    setText(id, newText) {
      self.text = newText;
    },
    toggle() {
      self.completed = !self.completed;
    },
  }));

const RootStore = types
  .model({
    todos: types.optional(types.map(Todo), {}),
  })
  .views(self => ({
    get pendingCount() {
      return values(self.todos).filter(todo => !todo.completed).length;
    },
    get completedCount() {
      return values(self.todos).filter(todo => todo.completed).length;
    },
    get uncompletedTodos() {
      return values(self.todos).filter(todo => !todo.completed);
    },
  }))
  .actions(self => ({
    addTodo(id, text) {
      self.todos.set(id, Todo.create({ id, text }));
    },
  }));

export default RootStore.create();
