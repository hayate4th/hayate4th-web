import React from 'react';
import './App.css';
import Header from './components/Organisms/Header';
import MainBody from './components/Organisms/MainBody';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainBody />
    </div>
  );
};

export default App;
