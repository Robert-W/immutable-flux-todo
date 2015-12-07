import TodoActions from 'actions/TodoActions';
import React from 'react';

let downArrowSVG = '<use xlink:href="#icon-arrow" />';

export default class TodoInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toggleAll: false };
  }

  addTodo (evt) {
    let value = this.refs.newTodo.value;
    evt.preventDefault();

    if (value !== '') {
      evt.target.reset();
      TodoActions.addTodo(value);
    }
  }

  toggle () {
    let newToggleAll = !this.state.toggleAll;
    this.setState({ toggleAll: newToggleAll });
    TodoActions.toggleAllComplete(newToggleAll);
  }

  render () {
    return (
      <div className={'todo-new-item flex-row' + (this.state.toggleAll ? ' active' : '')}>
        <div className='svg-icon-container'>
          <svg onClick={::this.toggle} className='svg-icon icon-down-arrow pointer' dangerouslySetInnerHTML={{ __html: downArrowSVG }} />
        </div>
        <form className='new-todo' onSubmit={::this.addTodo}>
          <input ref='newTodo' placeholder='Add something to do' />
        </form>
      </div>
    );
  }

}
