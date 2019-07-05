import React from 'react';

export interface CardProps {
  cardTitle: string;
}

const Card: React.FC<CardProps> = props => {
  const { cardTitle, children } = props;

  return (
    <div>
      <h1>{cardTitle}</h1>
      {children}
    </div>
  );
};

export default Card;
