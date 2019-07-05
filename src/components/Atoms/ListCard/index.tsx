import React from 'react';
import Card, { CardProps } from '../Card';

export interface ListCardProps extends CardProps {
  infoList: string[];
}

const ListCard: React.FC<ListCardProps> = props => {
  const { cardTitle, infoList } = props;

  return (
    <Card cardTitle={cardTitle}>
      <ul>
        {infoList.map((value: string, key: number) => {
          return <li key={key}>{value}</li>;
        })}
      </ul>
    </Card>
  );
};

export default ListCard;
