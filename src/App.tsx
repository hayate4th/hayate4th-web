import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import ListCard from './components/Atoms/ListCard';
import Header from './components/Organisms/Header';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <ListCard cardTitle={t('Card Title') + '1'} infoList={['hoge', 'fuga', 'piyo']} />
      <ListCard cardTitle="Hoge2" infoList={['hoge', 'fuga', 'piyo']} />
      <ListCard cardTitle="Hoge3" infoList={['hoge', 'fuga', 'piyo']} />
      <ListCard cardTitle="Hoge4" infoList={['hoge', 'fuga', 'piyo']} />
      <ListCard cardTitle="Hoge5" infoList={['hoge', 'fuga', 'piyo']} />
    </div>
  );
};

export default App;
