const itemsInitialState = {status: 'idle', items: []};
export function items(state = itemsInitialState, action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return {
        status: 'success',
        items: action.payload.items,
      };
    case 'ITEMS_FETCH_DATA_PENDING':
      return {
        status: 'pending',
        items: [...state.items],
      };
    case 'ITEMS_REMOVE_ITEM':
      return {
        status: 'pending',
        items: [
          ...state.slice(0, action.payload.index),
          ...state.slice(action.payload.index + 1),
        ],
      };
    default:
      return state;
  }
}

export function itemsSet(items, name) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    name,
    payload: {
      items,
    },
  };
}
export function itemsSetPending(items, name) {
  return {
    type: 'ITEMS_FETCH_DATA_PENDING',
    name,
  };
}

export function itemsRemove(index, name) {
  return {
    type: 'ITEMS_REMOVE_ITEM',
    name,
    payload: {
      index,
    },
  };
}
