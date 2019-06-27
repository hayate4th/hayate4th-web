import React from 'react';
import './App.css';
import LocaleSelector from './components/LocaleSelector';

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
    </div>
  );
};

export default App;
