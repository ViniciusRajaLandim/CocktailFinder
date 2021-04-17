import {action} from 'typesafe-actions';
import {ItemsTypes, Iitem} from '../types';

export const itemsSet = (data: Iitem) =>
  action(ItemsTypes.ITEMS_FETCH_DATA_SUCCESS, data);
export const itemsSetPending = (data: Iitem) =>
  action(ItemsTypes.ITEMS_FETCH_DATA_PENDING, {name: data.name});
export const itemsCleanList = (data: Iitem) =>
  action(ItemsTypes.ITEMS_CLEAN_ITEM_LIST, {name: data.name});
export const itemsRemove = (data: Iitem) =>
  action(ItemsTypes.ITEMS_REMOVE_ITEM, {index: data.index, name: data.name});
