import TodoActions from 'actions/TodoActions';
import {OrderedMap, Record} from 'immutable';
import KEYS from 'js/constants';
import alt from 'js/alt';

let history = [],
    historyIndex,
    todoStore,
    uuid = 0;

//- Crappy UUID Generator, but it works for this demo
let uuidGenerator = () => (++uuid).toString();
//- Create a reusable record for the todos
let TodoRecord = Record({
  id: null,
  text: '',
  complete: false
});

//- History Helpers
let saveHistory = function saveHistory () {
  history.push(todoStore.getState());
  historyIndex = history.length - 1;
};

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

  //- Internal Helper Functions


  //- TodoActions
  undo () {
    --historyIndex;
    if (historyIndex < 0) { historyIndex = 0; return; }
    //- Set the state to the appropriate history
    let state = history[historyIndex];
    this.todos = state.todos;
    this.filter = state.filter;
  }

  redo () {
    ++historyIndex;
    if (historyIndex >= history.length) { historyIndex = history.length - 1; return; }
    //- Set the state to the appropriate history
    let state = history[historyIndex];
    this.todos = state.todos;
    this.filter = state.filter;
  }

  addTodo (text) {
    let id = uuidGenerator();
    this.todos = this.todos.set(id, new TodoRecord({ id: id, text: text, complete: false }));
    saveHistory();
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

todoStore = alt.createStore(TodoStore, 'TodoStore');
//- Save the default history
saveHistory();

export { todoStore as default };
