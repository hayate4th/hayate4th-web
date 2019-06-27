import React from 'react';

export interface RadioButtonProps {
  inputName: string;
  inputValue: string;
  isChecked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  const { inputName, inputValue, isChecked } = props;

  return (
    <input
      type="radio"
      name={inputName}
      value={inputValue}
      checked={isChecked}
    />
  );
};

export default RadioButton;
