import React, { Fragment } from 'react';
import './radioButtonWithLabel.css';

export interface RadioButtonWithLabelProps {
  inputName: string;
  inputValue: string;
  defaultChecked?: boolean;
  labelText: string;
}

const RadioButtonWithLabel: React.FC<RadioButtonWithLabelProps> = props => {
  const { inputName, inputValue, defaultChecked, labelText } = props;

  return (
    <Fragment>
      <input
        type="radio"
        name={inputName}
        value={inputValue}
        checked={defaultChecked}
      />
      <label>{labelText}</label>
    </Fragment>
  );
};

export default RadioButtonWithLabel;
