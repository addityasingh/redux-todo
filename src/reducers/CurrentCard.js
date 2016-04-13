const currentCard = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CARD':
      return action.filter
    default:
      return state;
  }
}

export default currentCard;
