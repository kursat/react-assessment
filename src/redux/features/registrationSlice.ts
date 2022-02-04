import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RegistrationState {
  email: string | null;
  phone: string | null;
  verified: boolean;
}

const initialState: RegistrationState = {
  email: null,
  phone: null,
  verified: false,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<{ email: string }>) => {
      state.email = payload.email;
    },
    setPhone: (state, { payload }: PayloadAction<{ phone: string }>) => {
      state.phone = payload.phone;
    },
    setVerified: (state, { payload }: PayloadAction<boolean>) => {
      state.verified = payload;
    },
    resetRegistrationForm: () => {
      return initialState;
    },
  },
});

export const { setEmail, setPhone, resetRegistrationForm, setVerified } =
  registrationSlice.actions;

export default registrationSlice.reducer;
