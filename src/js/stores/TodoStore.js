import TodoActions from 'actions/TodoActions';
import alt from 'js/alt';

class TodoStore {

  constructor () {
    // Set store defaults
    this.todos = [];
    this.filter = '';

    // Bind events for this.emit from the actions
    this.bindListeners({
      addTodo: TodoActions.addTodo,
      editTodo: TodoActions.editTodo,
      removeTodo: TodoActions.removeTodo,
      markTodoNew: TodoActions.markTodoNew,
      markTodoComplete: TodoActions.markTodoComplete,
      markAllNew: TodoActions.markAllNew,
      markAllCompleted: TodoActions.markAllCompleted,
      showAll: TodoActions.showAll,
      showNew: TodoActions.showNew,
      showCompleted: TodoActions.showCompleted,
      clearCompleted: TodoActions.clearCompleted,
      undo: TodoActions.undo,
      redo: TodoActions.redo
    });
  }

  addTodo () {

  }

  editTodo () {

  }

  removeTodo () {

  }

  markTodoNew () {

  }

  markTodoComplete () {

  }

  markAllNew () {

  }

  markAllCompleted () {

  }

  showAll () {

  }

  showNew () {

  }

  showCompleted () {

  }

  clearCompleted () {

  }

  undo () {

  }

  redo () {

  }

}

const todoStore = alt.createStore(TodoStore, 'TodoStore');
export { todoStore as default };
