import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const localeAction = {
  updateLocale: actionCreator<string>('ACTIONS_UPDATE_LOCALE')
};
