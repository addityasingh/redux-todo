import React, { Component } from 'react';

import AddTodo from './AddTodo';
import FilteredTodos from '../containers/FilteredTodos';

export default class Card extends Component {
  render () {
    return (
      <div>
          <AddTodo />
          <FilteredTodos />
      </div>
    );
  }
}
