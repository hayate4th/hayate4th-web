import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const localeActions = {
  updateLocale: actionCreator<string>('ACTIONS_UPDATE_LOCALE')
};
