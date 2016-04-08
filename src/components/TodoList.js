import React, { Component } from 'react';

import Todo from './Todo';

export default class TodoList extends Component {
  componentDidMount () {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render() {
    //TODO:Remove hardcoded todo list once add todo implemented
    const initialTodos = [
        { text: 'Aditya' },
        { text: 'Pratap' },
        { text: 'Singh' }
      ];

    const { store } = this.context;
    const { todos, visibilityFilter } = store.getState();

    return (
      <ul>
        {
          initialTodos.map((t) => {
           return  <Todo { ...t }/>
          })
        }
      </ul>
    );
  }
}

TodoList.contextTypes = {
  store: React.PropTypes.object
}
