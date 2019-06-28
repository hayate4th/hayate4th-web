import React, { Fragment } from 'react';
import './style.css';

// TODO: この名前をもっと適切な名前に変更したい
export interface IndividualRadioButtonProps {
  inputValue: string;
  defaultChecked?: boolean;
  labelText: string;
}

export interface RadioButtonProps {
  inputId: string;
  inputName: string;
  inputValue: string;
  defaultChecked?: boolean;
  labelText: string;
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  const { inputId, inputName, inputValue, defaultChecked, labelText } = props;

  return (
    <Fragment>
      <input
        id={inputId}
        type="radio"
        name={inputName}
        value={inputValue}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={inputId}>{labelText}</label>
    </Fragment>
  );
};

export default RadioButton;
