import './App.css';
import Home from './pages/home/Home';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Home/>
      <SpeedInsights />
       <Analytics />
    </div>
    
  );
}

export default App;
