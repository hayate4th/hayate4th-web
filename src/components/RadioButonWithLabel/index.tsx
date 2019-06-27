import React, { Fragment } from 'react';
import RadioButton, {
  IndividualRadioButtonProps,
  RadioButtonProps
} from '../RadioButton';
import './radioButtonWithLabel.css';

export interface IndividualRadioButtonWithLabelProps
  extends IndividualRadioButtonProps {
  labelText: string;
}

export interface RadioButtonWithLabelProps extends RadioButtonProps {
  labelText: string;
}

const RadioButtonWithLabel: React.FC<RadioButtonWithLabelProps> = props => {
  const { inputId, inputName, inputValue, defaultChecked, labelText } = props;

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
