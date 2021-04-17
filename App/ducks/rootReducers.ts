import {combineReducers, Reducer, AnyAction} from 'redux';
import items from './reducers/items';
import {IitemsState} from './types';

function createNamedWrapperReducer(
  reducerFunction: Reducer<IitemsState>,
  reducerName: string,
) {
  return (state: IitemsState, action: AnyAction) => {
    const name = action.payload && action.payload.name;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;
    return reducerFunction(state, action);
  };
}
export default combineReducers({
  cocktails: createNamedWrapperReducer(items, 'cocktailsReducer'),
});
