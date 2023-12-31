import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductProvider>
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>
    </ProductProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
