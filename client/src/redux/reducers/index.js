import { combineReducers } from 'redux';
import authReducer from './authReducer';
import flightsReducer from './flightsReducer';
import loadReducer from './loadReducer'

export default combineReducers({ auth: authReducer, flights: flightsReducer, load: loadReducer });
