import TodoActions from 'actions/TodoActions';
import alt from 'js/alt';

//- Crappy UUID Generator but it works for this demo
let uuid = 0;
let uuidGenerator = () => (++uuid).toString();

class TodoStore {

  constructor () {
    // Set store defaults
    this.todos = [];
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

  addTodo () {

  }

  editTodo () {

  }

  setFilter () {

  }

  removeTodo () {

  }

  clearCompleted () {

  }

  toggleComplete () {

  }

  toggleAllComplete () {

  }

}

const todoStore = alt.createStore(TodoStore, 'TodoStore');
export { todoStore as default };
