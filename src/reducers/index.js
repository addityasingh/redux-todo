import { combineReducers} from 'redux';

import todos from './TodoList';
import visibilityFilter from './VisibilityFilter';

const todoReducer = combineReducers({
  todos,
  visibilityFilter
});

export default todoReducer
