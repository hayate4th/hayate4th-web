import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import DescriptionListCard from './components/Molecules/DescriptionListCard';
import ListCard from './components/Molecules/ListCard';
import Header from './components/Organisms/Header';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <DescriptionListCard
        cardTitle={t('Education Title')}
        descriptionListItems={[
          {
            ddText: t('Education Junior High'),
            dtText: t('Education Junior High Period')
          },
          {
            ddText: t('Education High'),
            dtText: t('Education High Period')
          },
          {
            ddText: t('Education University'),
            dtText: t('Education University Period')
          },
          {
            ddText: t('Education Graduate'),
            dtText: t('Education Graduate Period')
          }
        ]}
      />
      <ListCard
        cardTitle={t('Card Title') + '2'}
        listItems={['hoge', 'fuga', 'piyo']}
      />
      <ListCard
        cardTitle={t('Card Title') + '3'}
        listItems={['hoge', 'fuga', 'piyo']}
      />
      <ListCard
        cardTitle={t('Card Title') + '4'}
        listItems={['hoge', 'fuga', 'piyo']}
      />
      <ListCard
        cardTitle={t('Card Title') + '5'}
        listItems={['hoge', 'fuga', 'piyo']}
      />
    </div>
  );
};

export default App;
