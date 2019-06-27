import React from 'react';
import './style.css';

export interface IndividualRadioButtonProps {
  inputValue: string;
  defaultChecked?: boolean;
}

export interface RadioButtonProps extends IndividualRadioButtonProps {
  inputId: string;
  inputName: string;
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
