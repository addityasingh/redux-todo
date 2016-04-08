import React, { Component } from 'react';

import AddTodo from './AddTodo';
import FilteredTodos from '../containers/FilteredTodos';
import Footer from '../components/Footer';

export default class App extends Component {
  render () {
    return (
      <div>
        <AddTodo />
        <FilteredTodos />
        <Footer />
      </div>
    );
  }
};
