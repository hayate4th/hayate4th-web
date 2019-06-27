import React from 'react';
import LocaleSelector from './components/LocaleSelector';

const App: React.FC = () => {
  const localeProps = [
    {
      defaultChecked: true,
      inputValue: 'ja',
      labelText: '日本語'
    },
    {
      inputValue: 'en',
      labelText: 'English'
    }
  ];

  return (
    <div className="App">
      <LocaleSelector localeProps={localeProps} />
    </div>
  );
};

export default App;
