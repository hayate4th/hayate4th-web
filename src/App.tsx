import React from 'react';
import './App.css';
import LocaleSelector from './components/LocaleSelector';
import logo from './logo.svg';

const App: React.FC = () => {
  const localeProps = [
    {
      defaultChecked: true,
      localeLabelText: '日本語',
      localeValue: 'ja'
    },
    {
      localeLabelText: 'English',
      localeValue: 'en'
    }
  ];

  return (
    <div className="App">
      <LocaleSelector localeProps={localeProps} />
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
