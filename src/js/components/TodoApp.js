import TodoItemList from 'components/TodoItemList';
import StatusBar from 'components/StatusBar';
import TodoInput from 'components/TodoInput';
import TodoStore from 'stores/TodoStore';
import KEYS from 'js/constants';
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

  countRemaining (todos) {
    let count = 0;
    todos.forEach(todo => { if (!todo.get(KEYS.TODO_COMPLETE)) { ++count; } });
    return count;
  }

  render () {
    return (
      <div className='todo-app'>
        <header className='todo-app-header'>todo</header>
        <section className='todo-notepad'>
          <TodoInput />
          <TodoItemList todos={this.state.todos} filter={this.state.filter} />
          <StatusBar size={this.state.todos.size} filter={this.state.filter} remaining={this.countRemaining(this.state.todos)} />
        </section>
        <footer className='todo-app-footer'>
          <div>Built by: <a href='https://github.com/Robert-W'>robby winterbottom</a></div>
          <div>Flux todo with immutable.js</div>
        </footer>
      </div>
    );
  }

}
