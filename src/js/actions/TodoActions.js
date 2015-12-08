import alt from 'js/alt';

class TodoActions {

  undo () {
    this.dispatch();
  }

  redo () {
    this.dispatch();
  }

  addTodo (todoText) {
    this.dispatch(todoText);
  }

  editTodo (id, newText) {
    this.dispatch({ id: id, text: newText });
  }

  setFilter (filter) {
    this.dispatch(filter);
  }

  removeTodo (id) {
    this.dispatch(id);
  }

  clearCompleted () {
    this.dispatch();
  }

  toggleComplete (id, completeStatus) {
    this.dispatch({ id: id, complete: completeStatus });
  }

  toggleAllComplete (complete) {
    this.dispatch(complete);
  }

}

const todoActions = alt.createActions(TodoActions);
export { todoActions as default };
