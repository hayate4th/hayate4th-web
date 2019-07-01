import anime from 'animejs';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../../images/hayate4th.jpg';
import MainTitle from '../../Atoms/MainTitle';
import RoundIcon from '../../Atoms/RoundIcon';
import LocaleSelector from '../../Molecules/LocaleSelector';
import './style.css';

const Header: React.FC = () => {
  // window オブジェクトはクライアントサイド JavaScript が起動するタイミングで自動的に生成される
  const { t } = useTranslation();
  const [windowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    // TODO: .letter の opacity が1になってるから一旦0に戻す必要がある
    anime({
      duration: 3000,
      opacity: 1,
      targets: '.round-icon',
      translateX: [windowWidth, 0]
    });

    anime({
      delay: (_, i) => {
        return 150 * (i + 1);
      },
      duration: 600,
      easing: 'easeOutExpo',
      offset: '-=775',
      opacity: [0, 1],
      targets: '.letter'
    });
  });

  return (
    <header>
      <LocaleSelector localeProps={localeProps} />
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
