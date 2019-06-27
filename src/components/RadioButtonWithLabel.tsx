import React, { Fragment } from 'react';

export interface RadioButtonWithLabelProps {
  inputName: string;
  inputValue: string;
  isChecked?: boolean;
  labelText: string;
}

const RadioButtonWithLabel: React.FC<RadioButtonWithLabelProps> = props => {
  const { inputName, inputValue, isChecked, labelText } = props;

  return (
    <Fragment>
      <input
        type="radio"
        name={inputName}
        value={inputValue}
        checked={isChecked}
      />
      <label>{labelText}</label>
    </Fragment>
  );
};

export default RadioButtonWithLabel;
