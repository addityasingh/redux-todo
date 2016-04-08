import React, { Component } from 'react';

import AddTodo from './AddTodo';
import FilteredTodos from '../containers/FilteredTodos';
import FilterLink from '../containers/FilterLink';

export default class App extends Component {
  render () {
    return (
      <div>
        <AddTodo />
        <FilteredTodos />
        <FilterLink />
      </div>
    );
  }
};
