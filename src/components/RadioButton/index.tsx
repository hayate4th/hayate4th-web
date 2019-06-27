import React from 'react';
// import './RadioButton.css';

export interface RadioButtonProps {
  inputId: string;
  inputName: string;
  inputValue: string;
  defaultChecked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  const { inputId, inputName, inputValue, defaultChecked } = props;

  return (
    <input
      id={inputId}
      type="radio"
      name={inputName}
      value={inputValue}
      defaultChecked={defaultChecked}
    />
  );
};

export default RadioButton;
