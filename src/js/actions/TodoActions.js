import alt from 'js/alt';

class TodoActions {

  undo () {

  }

  redo () {

  }

  addTodo (todoText) {
    this.dispatch(todoText);
  }

  editTodo (id, newText) {
    this.dispatch({ id: id, text: newText });
  }

  setFilter () {

  }

  removeTodo () {

  }

  clearCompleted () {

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
