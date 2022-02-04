import { combineReducers } from '@reduxjs/toolkit';
import registrationForm from './features/registrationSlice';
import auth from './features/authSlice';

const rootReducer = combineReducers({
  registrationForm,
  auth,
});

export default rootReducer;
