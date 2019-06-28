import React from 'react';
import LocaleSelector from '../LocaleSelector';
import './style.css';

const Header: React.FC = () => {
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
    <header>
      <LocaleSelector localeProps={localeProps} />
    </header>
  );
};

export default Header;
