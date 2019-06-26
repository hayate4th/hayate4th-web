import React from 'react';

export interface LocaleRadioButtonProps {
  leftLanguage: string;
  rightLanguage: string;
}

const LocaleRadioButton: React.FC<LocaleRadioButtonProps> = props => {
  const { leftLanguage, rightLanguage } = props;

  return (
    <div>
      <input type="radio" name="locale" value={leftLanguage} checked={true} />
      <label>{leftLanguage}</label>
      <input type="radio" name="locale" value={rightLanguage} />
      <label>{rightLanguage}</label>
    </div>
  );
};

export default LocaleRadioButton;
