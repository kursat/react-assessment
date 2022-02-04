import { combineReducers } from '@reduxjs/toolkit';
import registrationForm from './features/registrationSlice';

const rootReducer = combineReducers({
  registrationForm,
});

export default rootReducer;
