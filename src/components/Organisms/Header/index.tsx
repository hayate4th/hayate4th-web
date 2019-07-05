import anime from 'animejs';
import React, { useEffect, useState } from 'react';
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

  // TODO: .letter の opacity を 0 に戻す (思った以上に難しい)
  // const letterSpanList = document.getElementsByClassName('letter');
  // if (letterSpanList.length > 0) {
  //   Array.from(letterSpanList).forEach(letterSpan => {
  //     letterSpan.setAttribute('style', 'opacity: 0;');
  //   });
  // }

  useEffect(() => {
    // RoundIcon に対するアニメーション
    anime({
      duration: 3000,
      opacity: 1,
      targets: '.round-icon',
      translateX: [windowWidth, 0]
    });

    // MainTitle に対するアニメーション
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
