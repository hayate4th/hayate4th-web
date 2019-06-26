import React from 'react';
import './App.css';
import LocaleRadioButton from './components/LocaleRadioButton';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <LocaleRadioButton leftLanguage="日本語" rightLanguage="English" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
