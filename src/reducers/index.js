import { combineReducers } from 'redux';

import cards from './TodoList';
import currentCard from './CurrentCard';

const todoReducer = combineReducers({
  cards,
  currentCard
});

export default todoReducer
