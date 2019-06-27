import React, { Fragment } from 'react';
import RadioButtonWithLabel, {
  IndividualRadioButtonWithLabelProps
} from '../RadioButonWithLabel';

export interface RadioButtonWithLabelGroupProps {
  inputGroupName: string;
  individualRadioButtonWithLabelGroupProps: IndividualRadioButtonWithLabelProps[];
}

const RadioButtonWithLabelGroup: React.FC<
  RadioButtonWithLabelGroupProps
> = props => {
  const { inputGroupName, individualRadioButtonWithLabelGroupProps } = props;

  return (
    <Fragment>
      {individualRadioButtonWithLabelGroupProps.map(
        (value: IndividualRadioButtonWithLabelProps, key: number) => {
          return (
            <RadioButtonWithLabel
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

export default RadioButtonWithLabelGroup;
