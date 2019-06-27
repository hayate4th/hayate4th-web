import React from 'react';
import { IndividualRadioButtonWithLabelProps } from '../RadioButonWithLabel';
import RadioButtonWithLabelGroup from '../RadioButtonWithLabelGroup';

export interface LocaleSelectorProps {
  localeProps: IndividualRadioButtonWithLabelProps[];
}

const LocaleSelector: React.FC<LocaleSelectorProps> = props => {
  const { localeProps } = props;

  return (
    <div
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        console.log(event.target.value)
      }
    >
      <RadioButtonWithLabelGroup
        inputGroupName="locale"
        individualRadioButtonWithLabelGroupProps={localeProps}
      />
    </div>
  );
};

export default LocaleSelector;
