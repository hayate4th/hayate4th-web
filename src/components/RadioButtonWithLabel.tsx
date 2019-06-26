import React, { Fragment } from 'react';
import RadioButton from './RadioButton';

export interface RadioButtonWithLabelProps {
  inputName: string;
  inputValue: string;
  labelText: string;
}

const RadioButtonWithLabel: React.FC<RadioButtonWithLabelProps> = props => {
  const { inputName, inputValue, labelText } = props;

  return (
    <Fragment>
      <RadioButton inputName={inputName} inputValue={inputValue} />
      <label>{labelText}</label>
    </Fragment>
  );
};

export default RadioButtonWithLabel;
