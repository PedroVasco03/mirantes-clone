import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from "./routes";
import './responsive.global.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppRoutes />
);
