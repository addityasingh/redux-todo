import Checkbox from 'material-ui/lib/checkbox';
import React, { Component } from 'react';

const styles = {
  checkbox: {
    marginBottom: 16
  }
}

const Todo = ({ text, completed, onClick }) => {
  return (
    <Checkbox
      label= { text }
      checked = { completed }
      onClick = { onClick }
      style={styles.checkbox}
    />
  );
}

export default Todo;
