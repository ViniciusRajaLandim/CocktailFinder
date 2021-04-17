import {IitemsState, ItemsTypes} from '../types';

import {Reducer} from 'redux';
const INITIAL_STATE: IitemsState = {
  items: [],
  status: 'idle',
};
const reducer: Reducer<IitemsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemsTypes.ITEMS_FETCH_DATA_SUCCESS: {
      return {
        status: 'success',
        items: action.payload.items,
      };
    }
    case ItemsTypes.ITEMS_FETCH_DATA_PENDING:
      return {
        status: 'pending',
        items: [...state.items],
      };
    case ItemsTypes.ITEMS_REMOVE_ITEM:
      return {
        status: 'pending',
        items: [
          ...state.items.slice(0, action.payload.index),
          ...state.items.slice(action.payload.index + 1),
        ],
      };
    default:
      return state;
  }
};
export default reducer;
