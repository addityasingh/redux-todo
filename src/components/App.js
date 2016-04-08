import React, { Component } from 'react';

import AddTodo from './AddTodo';
import AppBarIcon from './AppBarIcon';
import FilteredTodos from '../containers/FilteredTodos';
import Footer from '../components/Footer';

export default class App extends Component {
  render () {
    return (
      <div>
        <AppBarIcon></AppBarIcon>
        <AddTodo />
        <FilteredTodos />
        <Footer />
      </div>
    );
  }
};
