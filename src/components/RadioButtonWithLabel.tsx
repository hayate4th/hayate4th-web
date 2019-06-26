import React, { Fragment } from 'react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export interface RadioButtonWithLabelProps {
  radioButtonProps: RadioButtonProps;
  labelText: string;
}

const RadioButtonWithLabel: React.FC<RadioButtonWithLabelProps> = props => {
  const { radioButtonProps, labelText } = props;

  return (
    <Fragment>
      <RadioButton inputName={radioButtonProps.inputName} inputValue={radioButtonProps.inputValue} />
      <label>{labelText}</label>
    </Fragment>
  );
};

export default RadioButtonWithLabel;
