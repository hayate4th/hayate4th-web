import React from 'react';
import { useTranslation } from 'react-i18next';
import DescriptionListCard from '../../Molecules/DescriptionListCard';
import ListCard from '../../Molecules/ListCard';
import './style.css';

const Body: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main>
      <DescriptionListCard
        cardTitle={t('Work Experience Title')}
        descriptionListItems={[
          {
            ddText: t('Work Experience SWC Position and Period'),
            dtText: t('Work Experience SWC')
          },
          {
            ddText: t('Work Experience AIST Position and Period'),
            dtText: t('Work Experience AIST')
          },
          {
            ddText: t('Work Experience Y! Intern Position and Period'),
            dtText: t('Work Experience Y! Intern')
          },
          {
            ddText: t('Work Experience GREE Intern Position and Period'),
            dtText: t('Work Experience GREE Intern')
          },
          {
            ddText: t('Work Experience Cybozu Intern Position and Period'),
            dtText: t('Work Experience Cybozu Intern')
          },
          {
            ddText: t('Work Experience NN Intern Position and Period'),
            dtText: t('Work Experience NN Intern')
          },
          {
            ddText: t('Work Experience Cybozu Position and Period'),
            dtText: t('Work Experience Cybozu')
          }
        ]}
      />
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
    </main>
  );
};

export default Body;
