import React from 'react';
import RadioButtonWithLabelGroup from '../RadioButtonWithLabelGroup'

interface LocaleProps {
  localeValue: string;
  localeLabelText: string;
  defaultChecked?: boolean;
}

export interface LocaleSelectorProps {
  localeProps: LocaleProps[];
}

const LocaleSelector: React.FC<LocaleSelectorProps> = props => {
  const { localeProps } = props;

  return (
    <div
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        console.log(event.target.value)
      }
    >
      {localeProps.map((value: LocaleProps, key: number) => {
        return (
          <RadioButtonWithLabel
            key={key}
            inputName="locale"
            inputValue={value.localeValue}
            labelText={value.localeLabelText}
            defaultChecked={value.defaultChecked}
          />
        );
      })}
    </div>
  );
};

export default LocaleSelector;
