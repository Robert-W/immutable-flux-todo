import TodoItem from 'components/TodoItem';
import React from 'react';

export default class TodoItemList extends React.Component {

  renderTodoItems (todos) {
    return !todos ? null : todos.map((todo, index) => {
      return <TodoItem key={index} todo={todo} />;
    });
  }

  render () {
    let todoItems = this.renderTodoItems(this.props.todos);
    return (
      <div className='todo-item-list'>
        {todoItems}
      </div>
    );
  }

}
