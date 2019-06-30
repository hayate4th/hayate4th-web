import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { localeActions } from '../actions/localeActions';

export interface LocaleState {
  locale: string;
}

const initialState: LocaleState = {
  locale: 'ja'
};

export const localeReducer = reducerWithInitialState(initialState).case(
  localeActions.updateLocale,
  (state, locale) => {
    return Object.assign({}, state, { locale });
  }
);
