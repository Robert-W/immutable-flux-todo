import React from 'react';

let checkmarkSVG = '<use xlink:href="#icon-checkmark" />';
let closeSVG = '<use xlink:href="#icon-close" />';

export default class TodoItem extends React.Component {

  render () {
    return (
      <div className='todo-edit-item flex-row'>
        <div className='svg-icon-container'>
          <div className='circle'>
            <svg className='svg-icon icon-checkmark pointer' dangerouslySetInnerHTML={{ __html: checkmarkSVG }} />
          </div>
        </div>
        <input className='edit-item' defaultValue='something to do' />
        <div className='svg-icon-container'>
          <svg className='svg-icon icon-close pointer' dangerouslySetInnerHTML={{ __html: closeSVG }} />
        </div>
      </div>
    );
  }

}
