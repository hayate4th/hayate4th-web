import React from 'react';

export interface SquareIconProps {
  altString: string;
  urlString: string;
  width: number;
  height: number;
  refFunction?: (ref: HTMLImageElement | null) => any;
}

const SquareIcon: React.FC<SquareIconProps> = props => {
  const { altString, urlString, width, height, refFunction } = props;

  return (
    <img
      className="square-icon"
      src={urlString}
      alt={altString}
      width={width}
      height={height}
      ref={refFunction}
    />
  );
};

export default SquareIcon;
