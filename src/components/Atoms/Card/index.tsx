import React from 'react';

export interface CardProps {
  cardTitle: string;
}

const Card: React.FC<CardProps> = props => {
  const { cardTitle, children } = props;

  return (
    <div>
      <h2>{cardTitle}</h2>
      {children}
    </div>
  );
};

export default Card;
