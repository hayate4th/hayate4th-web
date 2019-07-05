import React, { Fragment } from 'react';
import Card, { CardProps } from '../../Atoms/Card';
import './style.css';

interface DescriptionListItem {
  ddText: string;
  dtText: string;
}

export interface DescriptionListCardProps extends CardProps {
  descriptionListItems: DescriptionListItem[];
}

const DescriptionListCard: React.FC<DescriptionListCardProps> = props => {
  const { cardTitle, descriptionListItems } = props;

  return (
    <Card cardTitle={cardTitle}>
      <dl>
        {descriptionListItems.map(
          (descriptionListItem: DescriptionListItem, key: number) => {
            return (
              <Fragment key={key}>
                <dt>{descriptionListItem.dtText}</dt>
                <dd>{descriptionListItem.ddText}</dd>
              </Fragment>
            );
          }
        )}
      </dl>
    </Card>
  );
};

export default DescriptionListCard;
