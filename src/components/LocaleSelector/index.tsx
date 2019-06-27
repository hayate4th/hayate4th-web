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

const LocaleSelector: React.FC<LocaleSelectorProps> = () => {
  return (
    <div>
      <RadioButtonWithLabel
        inputName="locale"
        inputValue="ja"
        isChecked={true}
        labelText="日本語"
      />
      <RadioButtonWithLabel
        inputName="locale"
        inputValue="en"
        labelText="English"
      />
    </div>
  );
};

export default LocaleSelector;
