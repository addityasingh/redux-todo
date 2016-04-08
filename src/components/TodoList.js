import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ todos, onClick }) => {
  return (
    <ul>
      {
        todos.map((t) => {
         return  (
           <Todo
             key = { t.id }
             { ...t }
             onClick= {() => onClick(t.id) }>
           </Todo>
          );
        })
      }
    </ul>
  );
}

export default TodoList;
