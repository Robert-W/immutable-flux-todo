import TodoItem from 'components/TodoItem';
import KEYS from 'js/constants';
import React from 'react';

export default class TodoItemList extends React.Component {

  renderTodoItems (todos) {
    return !todos ? null : todos.map((todo, index) => {
      return <TodoItem key={index} todo={todo} />;
    });
  }

  render () {
    let todos = this.props.todos;
    let todoItems = [];

    todos.forEach(todo => {
      todoItems.push(<TodoItem key={todo.get(KEYS.TODO_ID)} todo={todo} />);
    });

    return (
      <div className='todo-item-list'>
        {todoItems}
      </div>
    );
  }

}
