import React from 'react';
import { useTranslation } from 'react-i18next';
import githubMark from '../../../images/github.png';
import linkedInMark from '../../../images/linkedin.png';
import twitterMark from '../../../images/twitter.png';
import DescriptionListCard from '../../Molecules/DescriptionListCard';
import IconLinkListCard from '../../Molecules/IconLinkListCard';
import './style.css';

const Body: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main>
      <IconLinkListCard
        cardTitle={t('Contact Title')}
        iconLinkListItems={[
          {
            iconLink: 'https://twitter.com/hayate4th',
            iconProps: {
              altString: t('Contact twitter Icon altString'),
              height: 75,
              urlString: twitterMark,
              width: 75
            }
          },
          {
            iconLink: 'https://github.com/hayate4th',
            iconProps: {
              altString: t('Contact github Icon altString'),
              height: 75,
              urlString: githubMark,
              width: 75
            }
          },
          {
            iconLink: 'https://www.linkedin.com/in/ryotaro-nakagawa-1077ba180',
            iconProps: {
              altString: t('Contact linkedIn Icon altString'),
              height: 75,
              urlString: linkedInMark,
              width: 75
            }
          }
        ]}
      />
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
    </main>
  );
};

export default Body;
