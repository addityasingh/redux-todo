import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(item => !item.completed );
    case 'SHOW_COMPLETED':
      return todos.filter(item => item.completed );
    default:
      return todos;
  }
}

const mapStateToProps = ( state ) => {
  return {
    todos: getFilteredTodos(state.todos, state.visibilityFilter)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => dispatch(toggleTodo(id))
  };
}

const FilteredTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default FilteredTodos;
