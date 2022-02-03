import { combineReducers } from '@reduxjs/toolkit';
import counter from './features/counterSlice';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
