// import {SERVER_URL} from '@assets/constants';
import {itemsSet} from '../reducers/general';
// import {resolveError} from '@funcs/basic';

export function getCockTails(text: string) {
  return async dispatch => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
    fetch(url, {
      method: 'GET',
    })
      .then(r => {
        if (r.ok) return r.json();
        else throw r;
      })
      .then(r => {
        dispatch(itemsSet(r.drinks, 'cocktailsReducer'));
      })
      .catch(console.log);
  };
}
