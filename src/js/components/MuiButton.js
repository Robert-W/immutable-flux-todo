/*eslint-disable no-unused-expressions */
import ReactDOM from 'react-dom';
import React from 'react-lib';

let timeoutDuration = 1500,
    timer;

//- Base Styles
let buttonStyles = {
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer'
};

let muiClickStyle = (type) => {
  let style = {
    position: 'absolute',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    zIndex: 1,
    left: 0,
    top: 0
  };

  if (type === 'circle') {
    style.borderRadius = '50%';
    style.zIndex = 5;
  }

  return style;
};

export default class MuiButton extends React.Component {

  constructor (props) {
    super(props);
    this.state = { ripples: [] };
  }

  animate (evt) {
    let target = ReactDOM.findDOMNode(this);
    let size = Math.max(target.clientHeight, target.clientWidth);
    let left = evt.pageX - target.offsetLeft - (size / 2);
    let top = evt.pageY - target.offsetTop - (size / 2);
    let ripples = this.state.ripples;
    //- Push the ripple node into the stack
    ripples.push(<Ripple key={ripples.length} top={top} left={left} size={size} />);
    this.setState({ ripples: ripples });
    //- Remove this animation once completed
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.setState({ ripples: [] });
    }, timeoutDuration);
  }

  render () {
    return (
      <button className={this.props.className || ''} style={buttonStyles}>
        <span ref='wrapper' style={muiClickStyle(this.props.shape)} onClick={::this.animate}>
          {this.state.ripples}
        </span>
        {this.props.children}
      </button>
    );
  }

}

class Ripple extends React.Component {

  constructor (props) {
    super(props);
    this.state = { transform: 'scale(0)', opacity: 1 };
  }

  componentDidMount() {
    let node = ReactDOM.findDOMNode(this);
    //- Force the default styles to take effect, simply reading a value from
    //- computed style will flush pending changes so they are applied
    window.getComputedStyle(node).opacity;
    this.setState({ transform: 'scale(2)', opacity: 0 });
  }

  generateStyles() {
    return {
      transition: 'opacity 2s cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 2s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      transform: this.state.transform,
      height: `${this.props.size}px`,
      width: `${this.props.size}px`,
      opacity: this.state.opacity,
      left: this.props.left,
      position: 'absolute',
      borderRadius: '50%',
      top: this.props.top
    };
  }

  render () {
    return (
      <div className='muiRipple' style={this.generateStyles()} />
    );
  }

}
