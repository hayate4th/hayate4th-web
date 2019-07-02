import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { localeActions } from '../../../actions/localeActions';
import { AppState } from '../../../store';
import LocaleSelector from '../LocaleSelector';

export interface LocaleActions {
  updateLocale: (v: string) => Action<string>;
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
  return {
    updateLocale: (v: string) => dispatch(localeActions.updateLocale(v))
  };
};

const mapStateToProps = (appState: AppState) => {
  return Object.assign({}, appState.locale);
};

// TODO: ConnectLocaleSelectorProps が必要なのか検討する
const ConnectLocaleSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleSelector);

export default ConnectLocaleSelector;
