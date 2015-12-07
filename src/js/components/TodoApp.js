import TodoItemList from 'components/TodoItemList';
import StatusBar from 'components/StatusBar';
import TodoInput from 'components/TodoInput';
import TodoStore from 'stores/TodoStore';
import React from 'react';

let getAppState = () => TodoStore.getState();

export default class App extends React.Component {

  constructor (props) {
    super(props);
    //- Get default state
    this.state = getAppState();
    TodoStore.listen(::this.storeUpdated);
  }

  storeUpdated () {
    this.setState(getAppState());
  }

  render () {
    return (
      <div className='todo-app'>
        <header className='todo-app-header'>todo</header>
        <section className='todo-notepad'>
          <TodoInput />
          <TodoItemList todos={this.state.todos} />
          <StatusBar />
        </section>
        <footer className='todo-app-footer'>
          <div>Built by: <a href='https://github.com/Robert-W'>robby winterbottom</a></div>
          <div>Flux todo with immutable.js</div>
        </footer>
      </div>
    );
  }

}
