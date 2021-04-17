/**
 *  Action types
 */

export enum ItemsTypes {
  ITEMS_FETCH_DATA_SUCCESS = '@items/ITEMS_FETCH_DATA_SUCCESS',
  ITEMS_FETCH_DATA_PENDING = '@items/ITEMS_FETCH_DATA_PENDING',
  ITEMS_REMOVE_ITEM = '@items/ITEMS_REMOVE_ITEM',
}

/**
 *  Data types
 */

export interface Icocktail {
  readonly strDrink: string;
  readonly strDrinkThumb: string;
  readonly idDrink: number;
}
export interface Iitem {
  name: string;
  index?: number;
  items?: Icocktail[];
}

/**
 *  State types
 */

export interface IitemsState {
  readonly status: string;
  readonly items: Iitem[];
}
