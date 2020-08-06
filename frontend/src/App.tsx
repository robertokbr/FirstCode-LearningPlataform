import React from 'react';
import Landing from './pages/Lading';
import './assets/styles/global.css';
import Routes from "./Routes"

const App: React.FC = () => (
  <Routes>
    <Landing />
  </Routes>
);

export default App;
