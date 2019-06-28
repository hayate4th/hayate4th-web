import React, { Fragment } from 'react';
import RadioButton, {
  IndividualRadioButtonProps
} from '../../Atoms/RadioButon';

export interface RadioButtonGroupProps {
  inputGroupName: string;
  individualRadioButtonProps: IndividualRadioButtonProps[];
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = props => {
  const { inputGroupName, individualRadioButtonProps } = props;

  return (
    <Fragment>
      {individualRadioButtonProps.map(
        (value: IndividualRadioButtonProps, key: number) => {
          return (
            <RadioButton
              key={key}
              inputId={inputGroupName + '_' + value.inputValue}
              inputName={inputGroupName}
              inputValue={value.inputValue}
              labelText={value.labelText}
              defaultChecked={value.defaultChecked}
            />
          );
        }
      )}
    </Fragment>
  );
};

export default RadioButtonGroup;
