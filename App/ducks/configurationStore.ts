import {createStore, applyMiddleware, Store, Middleware} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import rootReducer from './rootReducers';
import {IitemsState} from './types';
export interface AplicationState {
  cocktails: IitemsState;
}

export default function configureStore() {
  const store: Store<AplicationState> = createStore(
    rootReducer,
    applyMiddleware(thunk),
  );
  return store;
}
