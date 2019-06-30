import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { localeActions } from '../actions/localeActions';

export interface LocaleState {
  currentLocale: string;
}

const initialState: LocaleState = {
  currentLocale: 'ja'
};

export const LocaleReducer = reducerWithInitialState(initialState).case(
  localeActions.updateLocale,
  (state, currentLocale) => {
    return Object.assign({}, state, { currentLocale });
  }
);
