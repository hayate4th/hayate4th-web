import React from 'react';
import RadioButtonWithLabel from './RadioButtonWithLabel';

const LocaleSelector: React.FC<{}> = () => {
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
