import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import IconButton from 'material-ui/lib/icon-button';
import TextField from 'material-ui/lib/text-field';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const styles = {
  container: {
    marginLeft: 20
  }
}

let AddTodo = ({ dispatch }) => {
    let nodeRef;

    return (
      <div style={ styles.container }>
        <form onSubmit={ (e) =>  {
          e.preventDefault();
          dispatch(addTodo(nodeRef.getValue()));
          nodeRef.clearValue();
          }}>
          <TextField
            hintText="Add task"
            floatingLabelText="Add task"
            ref = { node => {
              nodeRef = node;
            }} />
        </form>
      </div>
    );
}

AddTodo = connect()(AddTodo);
export default AddTodo;
