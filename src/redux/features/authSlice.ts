import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationState } from './registrationSlice';

export interface AuthState {
  user: null | {
    email: string | null;
    phone: string | null;
    verified: boolean;
    fullName: string | null;
    accountId: string | null;
  };
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<RegistrationState>) => {
      state.user = payload;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { setAuth, logOut } = authSlice.actions;

export default authSlice.reducer;
