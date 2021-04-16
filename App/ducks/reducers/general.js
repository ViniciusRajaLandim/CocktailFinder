export function items(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.payload.items;
    case 'ITEMS_REMOVE_ITEM':
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1),
      ];
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

export function itemsRemove(index, name) {
  return {
    type: 'ITEMS_REMOVE_ITEM',
    name,
    payload: {
      index,
    },
  };
}
