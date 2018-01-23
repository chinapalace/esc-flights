import { FETCH_FLIGHTS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return [action.payload];
  }
  return state;
}