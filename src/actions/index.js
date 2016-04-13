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

let nextCard = 0;
export const addCard = () => {
  return {
    type: 'ADD_CARD',
    cardid: nextCard++
  }
}

export const setCurrentCard = () => {
  return {
    type: 'SET_CURRENT_CARD',
    cardid: nextCard
  }
}
