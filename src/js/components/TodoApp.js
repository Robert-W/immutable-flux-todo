import TodoInput from 'components/TodoInput';
import TodoItem from 'components/TodoItem';
import React from 'react-lib';

export default class App extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='todo-app'>
        <header className='todo-app-header'>todo</header>
        <section className='todo-app-body'>
          <TodoInput />
          <TodoItem />
        </section>
        <footer className='todo-app-footer'>
          <div>Built by: <a href='https://github.com/Robert-W'>robby winterbottom</a></div>
          <div>Flux todo with immutable.js</div>
        </footer>
      </div>
    );
  }

}
