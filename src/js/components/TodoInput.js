import React from 'react-lib';

let downArrowSVG = '<use xlink:href="#icon-down-arrow" />';

export default class TodoInput extends React.Component {

  render () {
    return (
      <div className='todo-new-item flex-row'>
        <div className='svg-icon-container'>
          <svg className='svg-icon icon-down-arrow pointer' dangerouslySetInnerHTML={{ __html: downArrowSVG }} />
        </div>
        <input className='new-todo' placeholder='Add something to do' />
      </div>
    );
  }

}
