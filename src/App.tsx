import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="App">
      <Home/>
      <SpeedInsights />
    </div>
    
  );
}

export default App;
