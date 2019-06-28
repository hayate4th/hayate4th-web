import React from 'react';
import './style.css';

export interface MainTitleProps {
  titleText: string;
  refFunction?: (ref: HTMLImageElement | null) => any;
}

const MainTitle: React.FC<MainTitleProps> = props => {
  const { titleText, refFunction } = props;

  return (
    <h1 ref={refFunction}>
      <span className="letters">
        {titleText.split('').map((value: string, key: number) => {
          return (
            <span key={key} className="letter">
              {value}
            </span>
          );
        })}
      </span>
    </h1>
  );
};

export default MainTitle;
