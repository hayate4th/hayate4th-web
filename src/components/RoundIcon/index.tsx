import React from 'react';
import './style.css';

export interface RoundIconProps {
  altString: string;
  urlString: string;
  width: number;
  height: number;
}

const RoundIcon: React.FC<RoundIconProps> = props => {
  const { altString, urlString, width, height } = props;

  return (
    <img
      className="round-icon"
      src={urlString}
      alt={altString}
      width={width}
      height={height}
    />
  );
};

export default RoundIcon;
