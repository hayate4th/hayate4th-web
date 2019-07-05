import React from 'react';
import Card, { CardProps } from '../../Atoms/Card';
import './style.css';

export interface ListCardProps extends CardProps {
  listItems: string[];
}

const ListCard: React.FC<ListCardProps> = props => {
  const { cardTitle, listItems } = props;

  return (
    <Card cardTitle={cardTitle}>
      <ul>
        {listItems.map((listItem: string, key: number) => {
          return <li key={key}>{listItem}</li>;
        })}
      </ul>
    </Card>
  );
};

export default ListCard;
