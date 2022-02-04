import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RegistrationState {
  email: string | null;
  phone: string | null;
  verified: boolean;
  fullName: string | null;
  accountId: string | null;
}

const initialState: RegistrationState = {
  email: null,
  phone: null,
  verified: false,
  fullName: null,
  accountId: null,
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
    setAccountInfo: (
      state,
      { payload }: PayloadAction<{ fullName: string; accountId: string }>
    ) => {
      state.fullName = payload.fullName;
      state.accountId = payload.accountId;
    },
    resetRegistrationForm: () => {
      return initialState;
    },
  },
});

export const {
  setEmail,
  setPhone,
  resetRegistrationForm,
  setVerified,
  setAccountInfo,
} = registrationSlice.actions;

export default registrationSlice.reducer;
