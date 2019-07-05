import React from 'react';

export interface IconProps {
  altString: string;
  urlString: string;
  width: number;
  height: number;
  refFunction?: (ref: HTMLImageElement | null) => any;
}

const Icon: React.FC<IconProps> = props => {
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

export default Icon;
