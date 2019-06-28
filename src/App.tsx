import anime from 'animejs';
import React, { useState } from 'react';
import './App.css';
import MainTitle from './components/Atoms/MainTitle';
import RoundIcon from './components/Atoms/RoundIcon';
import Header from './components/Organisms/Header';
import logo from './images/hayate4th.jpg';

const App: React.FC = () => {
  // window オブジェクトはクライアントサイド JavaScript が起動するタイミングで自動的に生成される
  const [windowWidth] = useState(window.innerHeight);

  return (
    <div className="App">
      <Header />
      <MainTitle
        titleText="hayate4th"
        refFunction={ref => {
          anime({
            delay: (el, i) => {
              return 150 * (i + 1);
            },
            duration: 600,
            easing: 'easeOutExpo',
            offset: '-=775',
            opacity: [0, 1],
            targets: '.letter'
          });
        }}
      />
      <RoundIcon
        urlString={logo}
        altString="hayate4th's logo"
        width={300}
        height={300}
        refFunction={ref => {
          anime({
            duration: 3000,
            targets: ref,
            translateX: [windowWidth, 0]
          });
        }}
      />
    </div>
  );
};

export default App;
