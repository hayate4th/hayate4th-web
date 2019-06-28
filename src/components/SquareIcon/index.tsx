import React from 'react';

export interface SquareIconProps {
  altString: string;
  urlString: string;
  width: number;
  height: number;
}

const SquareIcon: React.FC<SquareIconProps> = props => {
  const { altString, urlString, width, height } = props;

  return (
    <img
      className="square-icon"
      src={urlString}
      alt={altString}
      width={width}
      height={height}
    />
  );
};

export default SquareIcon;
