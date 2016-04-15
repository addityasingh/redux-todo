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
        { cardid: action.cardid, todos: todos(undefined, action) }
      ];
    case 'ADD_TODO':
      return state.map((item) => {
        if (item.cardid === action.cardid) {
          return {
            ...item,
            todos: todos(undefined, action)
          };
        }

        return item;
      })
    default:
      return state;
  }
}

export default cards;
