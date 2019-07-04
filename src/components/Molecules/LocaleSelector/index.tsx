import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocaleState } from '../../../states/localeStates';
import { IndividualRadioButtonProps } from '../../Atoms/RadioButon';
import { LocaleActions } from '../ConnectLocaleSelector';
import RadioButtonGroup from '../RadioButtonGroup';
import './style.css';

export interface LocaleSelectorProps extends LocaleState, LocaleActions {
  localeProps: IndividualRadioButtonProps[];
}

const LocaleSelector: React.FC<LocaleSelectorProps> = props => {
  const { localeProps, locale, updateLocale } = props;
  const { i18n } = useTranslation();

  return (
    <div
      // TODO: 別の書き方を探したい
      className={'locale-selector ' + locale}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: updateLocale が意味をなしていない
        // updateLocale が Promise を返して、success の時 payload の値を使って i18n.changeLanguage をすべき
        updateLocale(event.target.value);
        // TODO: 確実に updateLocale が完了してから changeLanguage するようにする
        i18n.changeLanguage(event.target.value);
      }}
    >
      <RadioButtonGroup
        inputGroupName="locale"
        individualRadioButtonProps={localeProps}
      />
    </div>
  );
};

export default LocaleSelector;
