import React from 'react';
import { connect } from 'react-redux';

import { addCard } from '../actions';

const styles = {
  container: {
    marginLeft: 20
  }
}

let AddCard = ({ dispatch }) => {
    let nodeRef;

    return (
      <div style={ styles.container }>
        <button onClick={ (e) =>  dispatch(addCard()) }>
          Add card
        </button>
      </div>
    );
}

AddCard = connect()(AddCard);
export default AddCard;
