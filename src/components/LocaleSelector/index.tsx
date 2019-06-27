import React, { Fragment } from 'react';
import RadioButtonWithLabel from '../RadioButonWithLabel';

interface LocaleProps {
  localeValue: string;
  localeLabelText: string;
  isChecked?: boolean;
}

export interface LocaleSelectorProps {
  localeProps: LocaleProps[];
}

const LocaleSelector: React.FC<LocaleSelectorProps> = props => {
  const { localeProps } = props;

  return (
    <Fragment>
      {localeProps.map((value: LocaleProps, key: number) => {
        return (
          <RadioButtonWithLabel
            key={key}
            inputName="locale"
            inputValue={value.localeValue}
            labelText={value.localeLabelText}
            isChecked={value.isChecked}
          />
        );
      })}
    </Fragment>
  );
};

export default LocaleSelector;
