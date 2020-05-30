import React from 'react';
import ReactDOM from 'react-dom';
import SlideLinker from './SlideLinker.js';
import store from './state/reducers/mainReducers.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SlideLinker />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
