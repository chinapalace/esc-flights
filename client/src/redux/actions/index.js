import axios from 'axios';
import { FETCH_USER, FETCH_FLIGHTS, LOAD_FLIGHTS } from './types';
import farePortal from '../../utils/farePortal';


const ROOT_URL = `https://api-dev.fareportallabs.com/air/api/search/searchflightavailability`
const headers = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic anVzdGlubWNsYXJlbjYzQGdtYWlsLmNvbTpTd29yZGZpc2gx'
  }
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchFlights = (body) => async dispatch => {
  const res = await farePortal.api(body);
  console.log("res", res);

  dispatch({ type: FETCH_FLIGHTS, payload: res })
}

export function loadFlights(body) {
  return function (dispatch) {
    dispatch({ type: "ACTION_PENDING" });
    farePortal.api(body)
      .then((response) => {
        dispatch({ type: "ACTION_SUCCESS", payload: response })
      })
      .catch((err) => {
        dispatch({ type: "ACTION_FAIL", payload: err });
      });
  }

}
