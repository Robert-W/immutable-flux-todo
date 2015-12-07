import TodoActions from 'actions/TodoActions';
import {List, Map} from 'immutable';
import KEYS from 'js/constants';
import alt from 'js/alt';

//- Crappy UUID Generator, but it works for this demo
let uuid = 0;
let uuidGenerator = () => (++uuid).toString();

class TodoStore {

  constructor () {
    // Set store defaults
    this.todos = new List();
    this.filter = '';

    // Bind events for this.emit from the actions
    this.bindListeners({
      undo: TodoActions.undo,
      redo: TodoActions.redo,
      addTodo: TodoActions.addTodo,
      editTodo: TodoActions.editTodo,
      setFilter: TodoActions.setFilter,
      removeTodo: TodoActions.removeTodo,
      clearCompleted: TodoActions.clearCompleted,
      toggleComplete: TodoActions.toggleComplete,
      toggleAllComplete: TodoActions.toggleAllComplete
    });
  }

  undo () {

  }

  redo () {

  }

  addTodo (text) {
    let todo = {};
    todo[KEYS.TODO_ID] = uuidGenerator();
    todo[KEYS.TODO_COMPLETE] = false;
    todo[KEYS.TODO_TEXT] = text;

    this.todos = this.todos.push(new Map(todo));
  }

  editTodo (payload) {
    let index = this.todos.findIndex(todo => todo.get(KEYS.TODO_ID) === payload.id);
    //- Update the todo if found
    if (index > -1) {
      this.todos = this.todos.update(0, todoItem => {
        return todoItem.set(KEYS.TODO_TEXT, payload.text);
      });
    }
  }

  setFilter () {

  }

  removeTodo () {

  }

  clearCompleted () {

  }

  toggleComplete (payload) {
    let index = this.todos.findIndex(todo => todo.get(KEYS.TODO_ID) === payload.id);
    //- Update the todo if found
    if (index > -1) {
      this.todos = this.todos.update(0, todoItem => {
        return todoItem.set(KEYS.TODO_COMPLETE, payload.complete);
      });
    }
  }

  toggleAllComplete () {

  }

}

const todoStore = alt.createStore(TodoStore, 'TodoStore');
export { todoStore as default };
