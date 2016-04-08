import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let nodeRef;

    return (
      <div>
        <input
          ref = { node => {
            nodeRef = node;
          }}
        />
        <button onClick={ (e) =>  {
          e.preventDefault();
          dispatch(addTodo(nodeRef.value));
          nodeRef.value = '';
        }}>
          Add todo
        </button>
      </div>
    );
}

AddTodo = connect()(AddTodo);
export default AddTodo;
