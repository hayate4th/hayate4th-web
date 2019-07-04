import { combineReducers, createStore } from 'redux';
import { localeReducer, LocaleState } from './states/localeStates';

export interface AppState {
  locale: LocaleState;
}

const store = createStore(
  combineReducers<AppState>({
    locale: localeReducer
  })
);

export default store;
