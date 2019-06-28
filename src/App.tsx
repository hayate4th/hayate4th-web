import anime from 'animejs';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RoundIcon from './components/RoundIcon';
import logo from './images/hayate4th.jpg';

const App: React.FC = () => {
  // TODO: window.innerWidth はいつの段階で決まるのか調べる
  const [windowWidth] = useState(window.innerHeight);

  return (
    <div className="App">
      <Header />
      <RoundIcon
        urlString={logo}
        altString="hayate4th's logo"
        width={300}
        height={300}
        refFunction={ref => {
          anime({
            duration: 1500,
            targets: ref,
            translateX: [windowWidth, 0]
          });
        }}
      />
    </div>
  );
};

export default App;
