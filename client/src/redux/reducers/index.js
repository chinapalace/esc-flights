import {combineReducers} from 'redux';
import authReducer from './authReducer';
import flightsReducer from './flightsReducer';

export default combineReducers({auth: authReducer, flights: flightsReducer});
