import React, { Component } from 'react';

import AddTodo from './AddTodo';
import AppBarIcon from './AppBarIcon';
import Card from '../components/Card';
import FilteredTodos from '../containers/FilteredTodos';
import Footer from '../components/Footer';

export default class App extends Component {
  render () {
    return (
      <div>
        <AppBarIcon></AppBarIcon>
        <Card>
          <AddTodo />
          <FilteredTodos />
          <Footer />
        </Card>
      </div>
    );
  }
};
