import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';

const getFilteredCards = (cards, filter) => {
  return cards.filter((item) => item.cardid === filter);
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const FilteredCards = connect(
  mapStateToProps
)(Card);

export default FilteredCards;
