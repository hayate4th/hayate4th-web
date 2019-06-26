import React from 'react';

export interface RadioButtonProps {
  inputName: string;
  inputValue: string;
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  const { inputName, inputValue } = props;

  return (
    <input type="radio" name={inputName} value={inputValue} checked={true} />
  );
};

export default RadioButton;
