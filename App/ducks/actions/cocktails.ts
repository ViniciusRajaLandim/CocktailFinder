// import {SERVER_URL} from '@assets/constants';
import {itemsSet, itemsSetPending} from '../reducers/general';
// import {resolveError} from '@funcs/basic';

export function getCockTails(text: string) {
  return async dispatch => {
    dispatch(itemsSetPending([], 'cocktailsReducer'));
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
        dispatch(itemsSet(cocktails, 'cocktailsReducer'));
      })
      .catch(console.log);
  };
}
