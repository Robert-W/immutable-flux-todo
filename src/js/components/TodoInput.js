import TodoActions from 'actions/TodoActions';
import React from 'react';

let downArrowSVG = '<use xlink:href="#icon-arrow" />';

export default class TodoInput extends React.Component {

  addTodo (evt) {
    let value = this.refs.newTodo.value;
    evt.preventDefault();

    if (value !== '') {
      evt.target.reset();
      TodoActions.addTodo(value);
    }
  }

  render () {
    return (
      <div className='todo-new-item flex-row'>
        <div className='svg-icon-container'>
          <svg className='svg-icon icon-down-arrow pointer' dangerouslySetInnerHTML={{ __html: downArrowSVG }} />
        </div>
        <form className='new-todo' onSubmit={::this.addTodo}>
          <input ref='newTodo' placeholder='Add something to do' />
        </form>
      </div>
    );
  }

}
