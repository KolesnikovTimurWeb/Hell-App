import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScrollProvider } from './helpers/scrollProvider';
import './styles/reset.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>
);
