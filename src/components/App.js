import React, { Component } from 'react';
import addEventListenerWithOptions from 'add-eventlistener-with-options';

import AddTodo from './AddTodo';
import AppBarIcon from './AppBarIcon';
import Card from '../components/Card';
import FilteredTodos from '../containers/FilteredTodos';
import Footer from '../components/Footer';

export default class App extends Component {

  constructor (props) {
    super(props);
    // console.log(addEventListenerWithOptions);

    if (window.addEventListener) {
      console.log('window.addEventListener present')
      addEventListenerWithOptions(window, 'touchstart', () => {
        console.log('Here it is');
      });
    }

  }

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
