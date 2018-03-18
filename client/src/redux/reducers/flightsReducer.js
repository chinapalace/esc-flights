import { FETCH_FLIGHTS } from '../actions/types';

export default function (state = {
  data: []
}, action) {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return { ...state, data: action.payload };
  }
  return state;
}