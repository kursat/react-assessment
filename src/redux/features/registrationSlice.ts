import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RegistrationState {
  email: string | null;
  phone: string | null;
}

const initialState: RegistrationState = {
  email: null,
  phone: null,
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
  },
});

export const { setEmail, setPhone } = registrationSlice.actions;

export default registrationSlice.reducer;
