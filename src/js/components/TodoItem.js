import TodoActions from 'actions/TodoActions';
import KEYS from 'js/constants';
import React from 'react';

let checkmarkSVG = '<use xlink:href="#icon-checkmark" />';
let closeSVG = '<use xlink:href="#icon-close" />';

export default class TodoItem extends React.Component {

  markComplete () {
    let todo = this.props.todo;
    TodoActions.toggleComplete(todo.get(KEYS.TODO_ID), !todo.get(KEYS.TODO_COMPLETE));
  }

  deleteTodo () {
    let todo = this.props.todo;
    TodoActions.removeTodo(todo.get(KEYS.TODO_ID));
  }

  render () {
    return (
      <div className={'todo-edit-item flex-row' + (this.props.todo.get(KEYS.TODO_COMPLETE) ? ' complete' : '')}>
        <div className='svg-icon-container'>
          <div className='circle pointer' onClick={::this.markComplete}>
            <svg className='svg-icon icon-checkmark pointer' dangerouslySetInnerHTML={{ __html: checkmarkSVG }} />
          </div>
        </div>
        <input className='edit-item' defaultValue={this.props.todo.get(KEYS.TODO_TEXT)} />
        <div onClick={::this.deleteTodo} className='svg-icon-container'>
          <svg className='svg-icon icon-close pointer' dangerouslySetInnerHTML={{ __html: closeSVG }} />
        </div>
      </div>
    );
  }

}
