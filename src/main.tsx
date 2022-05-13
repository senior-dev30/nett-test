import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProviders } from './Providers';

import 'uno.css';
import './styles/main.css';
import '@unocss/reset/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);
