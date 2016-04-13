import React, { Component } from 'react';

import AddCard from './AddCard';
import AppBarIcon from './AppBarIcon';
import FilteredCards from '../containers/FilteredCards';

export default class App extends Component {
  render () {
    return (
      <div>
        <AppBarIcon></AppBarIcon>
        <AddCard />
        <FilteredCards />
      </div>
    );
  }
};
