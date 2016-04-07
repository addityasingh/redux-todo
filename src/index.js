import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoReducer from './reducers';
import App from './components/App';

let store = createStore(todoReducer);

render(
  <Provider store={ store }>
      <App />
  </Provider>
  , document.getElementById('root'));

  injectTapEventPlugin();
