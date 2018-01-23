import axios from 'axios';
import { FETCH_USER, FETCH_FLIGHTS } from './types';
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
