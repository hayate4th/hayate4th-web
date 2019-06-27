import React, { Fragment } from 'react';
import RadioButton from '../RadioButton';
import './radioButtonWithLabel.css';

export interface RadioButtonWithLabelProps {
  inputName: string;
  inputValue: string;
  defaultChecked?: boolean;
  labelText: string;
}

const RadioButtonWithLabel: React.FC<RadioButtonWithLabelProps> = props => {
  const { inputName, inputValue, defaultChecked, labelText } = props;
  const inputId = inputName + '_' + inputValue;

  return (
    <Fragment>
      <RadioButton
        inputId={inputId}
        inputName={inputName}
        inputValue={inputValue}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={inputId}>{labelText}</label>
    </Fragment>
  );
};

export default RadioButtonWithLabel;
