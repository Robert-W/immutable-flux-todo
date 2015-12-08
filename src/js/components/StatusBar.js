import TodoActions from 'actions/TodoActions';
import MuiButton from 'components/MuiButton';
import KEYS from 'js/constants';
import React from 'react';

let arrowSVG = '<use xlink:href="#icon-arrow" />';

export default class StatusBar extends React.Component {

  clearCompleted () {
    TodoActions.clearCompleted();
  }

  setFilter (filter) {
    TodoActions.setFilter(filter);
  }

  render () {
    return (
      <div className='status-bar flex-row'>
        <div className='remaining-count corner-item pointer'>{this.props.count} item remaining</div>
        <MuiButton className='state-button pointer'>
          <svg className='svg-icon icon-previous' dangerouslySetInnerHTML={{ __html: arrowSVG }} />
        </MuiButton>
        <div className='filters'>
          <MuiButton onClick={this.setFilter.bind(this, KEYS.FILTER_ALL)}
            className={`filter-button pointer${this.props.filter === KEYS.FILTER_ALL ? ' active' : ''}`}>
            All
          </MuiButton>
          <MuiButton onClick={this.setFilter.bind(this, KEYS.FILTER_NEW)}
            className={`filter-button pointer${this.props.filter === KEYS.FILTER_NEW ? ' active' : ''}`}>
            New
          </MuiButton>
          <MuiButton onClick={this.setFilter.bind(this, KEYS.FILTER_COMPLETED)}
            className={`filter-button pointer${this.props.filter === KEYS.FILTER_COMPLETED ? ' active' : ''}`}>
            Completed
          </MuiButton>
        </div>
        <MuiButton className='state-button pointer'>
          <svg className='svg-icon icon-next' dangerouslySetInnerHTML={{ __html: arrowSVG }} />
        </MuiButton>
        <MuiButton onClick={this.clearCompleted} className='clear-button corner-item pointer'>Clear completed</MuiButton>
      </div>
    );
  }

}
