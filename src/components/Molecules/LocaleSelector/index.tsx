import React from 'react';
import { IndividualRadioButtonProps } from '../../Atoms/RadioButon';
import RadioButtonGroup from '../RadioButtonGroup';

export interface LocaleSelectorProps {
  localeProps: IndividualRadioButtonProps[];
}

const LocaleSelector: React.FC<LocaleSelectorProps> = props => {
  const { localeProps } = props;

  return (
    <div
      className="locale-selector"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        console.log(event.target.value)
      }
    >
      <RadioButtonGroup
        inputGroupName="locale"
        individualRadioButtonProps={localeProps}
      />
    </div>
  );
};

export default LocaleSelector;
