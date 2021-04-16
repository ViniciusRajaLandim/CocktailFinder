import {combineReducers} from 'redux';
import {items} from './general';

function createNamedWrapperReducer(reducerFunction, reducerName: string) {
  return (state, action: object) => {
    const {name} = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;
    return reducerFunction(state, action);
  };
}
export default combineReducers({
  cocktails: createNamedWrapperReducer(items, 'cocktailsReducer'),
});
