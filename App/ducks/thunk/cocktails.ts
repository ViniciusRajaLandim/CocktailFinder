import {Dispatch, AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {itemsSet, itemsSetPending} from '../actions/items';
import {AplicationState} from '../configurationStore';
import {Icocktail} from '../types';
export const getCockTails = (
  text: string,
): ThunkAction<Promise<void>, AplicationState, unknown, AnyAction> => {
  return async (dispatch: Dispatch) => {
    dispatch(itemsSetPending({name: 'cocktailsReducer'}));
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
    fetch(url, {
      method: 'GET',
    })
      .then(r => {
        if (r.ok) return r.json();
        else throw r;
      })
      .then(r => {
        const cocktails = !!r.drinks ? r.drinks : [];
        const _coctails: Icocktail[] = cocktails;
        const data = {
          items: _coctails,
          name: 'cocktailsReducer',
        };
        dispatch(itemsSet(data));
      })
      .catch(console.log);
  };
};
