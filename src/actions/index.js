// Extract all the Action Creators here
let todoNextId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: todoNextId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


export const addCard = (id) => {
  return {
    type: 'ADD_CARD',
    id
  }
}
