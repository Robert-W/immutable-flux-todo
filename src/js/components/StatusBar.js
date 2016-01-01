import TodoActions from 'actions/TodoActions';
import MuiButton from 'components/MuiButton';
import KEYS from 'js/constants';
import React from 'react';

let arrowSVG = '<use xlink:href="#icon-arrow" />';

export default class StatusBar extends React.Component {

  render () {
    return (
      <div className={`status-bar flex-row${this.props.size === 0 ? ' hidden' : ''}`}>
        <div className='remaining-count corner-item pointer'>{this.props.remaining} item remaining</div>
        <MuiButton onClick={TodoActions.undo} className='state-button pointer' title='Undo'>
          <svg className='svg-icon icon-previous' dangerouslySetInnerHTML={{ __html: arrowSVG }} />
        </MuiButton>
        <div className='filters'>
          <MuiButton onClick={TodoActions.setFilter.bind(this, KEYS.FILTER_ALL)}
            className={`filter-button pointer${this.props.filter === KEYS.FILTER_ALL ? ' active' : ''}`}>
            All
          </MuiButton>
          <MuiButton onClick={TodoActions.setFilter.bind(this, KEYS.FILTER_NEW)}
            className={`filter-button pointer${this.props.filter === KEYS.FILTER_NEW ? ' active' : ''}`}>
            New
          </MuiButton>
          <MuiButton onClick={TodoActions.setFilter.bind(this, KEYS.FILTER_COMPLETED)}
            className={`filter-button pointer${this.props.filter === KEYS.FILTER_COMPLETED ? ' active' : ''}`}>
            Completed
          </MuiButton>
        </div>
        <MuiButton onClick={TodoActions.redo} className='state-button pointer' title='Redo'>
          <svg className='svg-icon icon-next' dangerouslySetInnerHTML={{ __html: arrowSVG }} />
        </MuiButton>
        <MuiButton onClick={TodoActions.clearCompleted} className='clear-button corner-item pointer'>Clear completed</MuiButton>
      </div>
    );
  }

}
