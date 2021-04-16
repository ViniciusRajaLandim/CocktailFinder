// import {SERVER_URL} from '@assets/constants';
// import {itemsSet} from '../reducers/general';
// import {resolveError} from '@funcs/basic';

import {SERVER_URL} from '../../assets/Constants';

// export function getCocktails(token) {
//   return async dispatch => {
//     const url = SERVER_URL + 'api/alerts/worker/';
//     fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     })
//       .then(r => {
//         if (r.ok) return r.json();
//         else throw r;
//       })
//       .then(r => dispatch(itemsSet(r.results, 'alerts')))
//       .catch(resolveError);
//   };
// }
