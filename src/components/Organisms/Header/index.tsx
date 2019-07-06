import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../../images/hayate4th.jpg';
import MainTitle from '../../Atoms/MainTitle';
import RoundIcon from '../../Atoms/RoundIcon';
import ConnectLocaleSelector from '../../Molecules/ConnectLocaleSelector';
import './style.css';

const Header: React.FC = () => {
  // window オブジェクトはクライアントサイド JavaScript が起動するタイミングで自動的に生成される
  const { t } = useTranslation();
  const [windowWidth] = useState(window.innerWidth);

  // TODO: 外部ファイルに置くのか検討すべき
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
      <ConnectLocaleSelector localeProps={localeProps} />
      <div className="horizontal-list">
        <RoundIcon
          urlString={logo}
          altString="hayate4th's logo"
          width={300}
          height={300}
        />
        <MainTitle titleText={t('Main Title')} />
      </div>
    </header>
  );
};

export default Header;
