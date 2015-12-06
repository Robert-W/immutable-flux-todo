import MuiButton from 'components/MuiButton';
import React from 'react';

let arrowSVG = '<use xlink:href="#icon-arrow" />';

export default class StatusBar extends React.Component {

  render () {
    return (
      <div className='status-bar flex-row'>
        <div className='remaining-count corner-item pointer'>1 item remaining</div>
        <MuiButton className='state-button pointer'>
          <svg className='svg-icon icon-previous' dangerouslySetInnerHTML={{ __html: arrowSVG }} />
        </MuiButton>
        <div className='filters'>
          <MuiButton className='filter-button pointer'>All</MuiButton>
          <MuiButton className='filter-button pointer'>New</MuiButton>
          <MuiButton className='filter-button pointer'>Completed</MuiButton>
        </div>
        <MuiButton className='state-button pointer'>
          <svg className='svg-icon icon-next' dangerouslySetInnerHTML={{ __html: arrowSVG }} />
        </MuiButton>
        <MuiButton className='clear-button corner-item pointer'>Clear completed</MuiButton>
      </div>
    );
  }

}
