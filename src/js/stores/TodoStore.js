import TodoActions from 'actions/TodoActions';
import {OrderedMap, Record} from 'immutable';
import KEYS from 'js/constants';
import alt from 'js/alt';

//- Crappy UUID Generator, but it works for this demo
let uuid = 0;
let uuidGenerator = () => (++uuid).toString();
//- Create a reusable record for the todos
let TodoRecord = Record({
  id: null,
  text: '',
  complete: false
});

class TodoStore {

  constructor () {
    // Set store defaults
    this.todos = OrderedMap();
    this.filter = KEYS.FILTER_ALL;

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
    let id = uuidGenerator();
    this.todos = this.todos.set(id, new TodoRecord({ id: id, text: text, complete: false }));
  }

  editTodo (payload) {
    this.todos = this.todos.set(payload.id, this.todos.get(payload.id).merge(payload));
  }

  setFilter (filter) {
    this.filter = filter;
  }

  removeTodo (id) {
    this.todos = this.todos.delete(id);
  }

  clearCompleted () {
    var todos = this.todos.toArray();
    todos.forEach(todoItem => {
      if (todoItem.get(KEYS.TODO_COMPLETE)) {
        this.todos = this.todos.delete(todoItem.get(KEYS.TODO_ID));
      }
    });
  }

  toggleComplete (payload) {
    this.todos = this.todos.set(payload.id, this.todos.get(payload.id).merge(payload));
  }

  toggleAllComplete (complete) {
    this.todos = this.todos.map(todoItem => todoItem.set(KEYS.TODO_COMPLETE, complete));
  }

}

const todoStore = alt.createStore(TodoStore, 'TodoStore');
export { todoStore as default };
