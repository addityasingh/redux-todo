const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
      break;
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
      break;
    default:
      return state;

  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
      break;
    case 'TOGGLE_TODO':
      return state.map(t => {
        return todo(t, action)
      })
    default:
      return state;
  }
}

const cards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        { cardid: action.cardid, todos: todos(undefined) }
      ];
    case 'ADD_TODO':
      return state.map((item) => {
        return todos(item.todos, action)
      });
    default:
      return state;
  }
}

export default todos;
