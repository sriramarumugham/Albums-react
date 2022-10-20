import React from 'react';
import ReactDOM from 'react-dom/client';

//components
import App from './components/App';

//redux store
import {store} from './features/store';

import { Provider } from 'react-redux';

import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

