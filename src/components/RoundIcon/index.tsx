import React from 'react';
import './style.css';

export interface RoundIconProps {
  altString: string;
  urlString: string;
  width: number;
  height: number;
  refFunction?: (ref: HTMLImageElement | null) => any;
}

const RoundIcon: React.FC<RoundIconProps> = props => {
  const { altString, urlString, width, height, refFunction } = props;

  return (
    <img
      className="round-icon"
      src={urlString}
      alt={altString}
      width={width}
      height={height}
      ref={refFunction}
    />
  );
};

export default RoundIcon;
