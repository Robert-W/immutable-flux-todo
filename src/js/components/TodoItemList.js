import TodoItem from 'components/TodoItem';
import KEYS from 'js/constants';
import React from 'react';

export default class TodoItemList extends React.Component {

  renderAllTodos (todos) {
    let items = [];
    todos.forEach(todo => { items.push(<TodoItem key={todo.get(KEYS.TODO_ID)} todo={todo} />); });
    return items;
  }

  renderNewTodos (todos) {
    let items = [];
    todos.forEach(todo => {
      if (!todo.get(KEYS.TODO_COMPLETE)) {
        items.push(<TodoItem key={todo.get(KEYS.TODO_ID)} todo={todo} />);
      }
    });
    return items;
  }

  renderCompletedTodos (todos) {
    let items = [];
    todos.forEach(todo => {
      if (todo.get(KEYS.TODO_COMPLETE)) {
        items.push(<TodoItem key={todo.get(KEYS.TODO_ID)} todo={todo} />);
      }
    });
    return items;
  }

  render () {
    let todos = this.props.todos;
    let todoItems = [];

    if (this.props.filter === KEYS.FILTER_ALL) { todoItems = this.renderAllTodos(todos); }
    if (this.props.filter === KEYS.FILTER_NEW) { todoItems = this.renderNewTodos(todos); }
    if (this.props.filter === KEYS.FILTER_COMPLETED) { todoItems = this.renderCompletedTodos(todos); }

    return (
      <div className='todo-item-list'>
        {todoItems}
      </div>
    );
  }

}
