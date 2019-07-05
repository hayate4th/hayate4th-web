import React from 'react';
import Card, { CardProps } from '../../Atoms/Card';
import Icon, { IconProps } from '../../Atoms/Icon';
import RoundIcon, { RoundIconProps } from '../../Atoms/RoundIcon';
import './style.css';

interface IconLinkListItem {
  iconType?: string;
  iconProps: IconProps | RoundIconProps;
  iconLink: string;
}

export interface IconLinkListCardProps extends CardProps {
  iconLinkListItems: IconLinkListItem[];
}

const IconLinkListCard: React.FC<IconLinkListCardProps> = props => {
  const { cardTitle, iconLinkListItems } = props;

  return (
    <Card cardTitle={cardTitle}>
      <dl>
        {iconLinkListItems.map(
          (iconLinkListItem: IconLinkListItem, key: number) => {
            return (
              <a
                key={key}
                href={iconLinkListItem.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {iconLinkListItem.iconType === 'round' ? (
                  <RoundIcon
                    altString={iconLinkListItem.iconProps.altString}
                    urlString={iconLinkListItem.iconProps.urlString}
                    width={iconLinkListItem.iconProps.width}
                    height={iconLinkListItem.iconProps.height}
                  />
                ) : (
                  <Icon
                    altString={iconLinkListItem.iconProps.altString}
                    urlString={iconLinkListItem.iconProps.urlString}
                    width={iconLinkListItem.iconProps.width}
                    height={iconLinkListItem.iconProps.height}
                  />
                )}
              </a>
            );
          }
        )}
      </dl>
    </Card>
  );
};

export default IconLinkListCard;
