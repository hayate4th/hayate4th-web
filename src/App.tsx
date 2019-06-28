import React from 'react';
import './App.css';
import Header from './components/Header';
import RoundIcon from './components/RoundIcon';
import SquareIcon from './components/SquareIcon';
import logo from './images/hayate4th.jpg';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <RoundIcon
        urlString={logo}
        altString="hayate4th's logo"
        width={300}
        height={300}
      />
      <SquareIcon
        urlString={logo}
        altString="hayate4th's logo"
        width={300}
        height={300}
      />
    </div>
  );
};

export default App;
