import React from 'react';
import ReactDOM from 'react-dom';
import SlideLinker from './SlideLinker';
import store from './state/reducers/main';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SlideLinker />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
