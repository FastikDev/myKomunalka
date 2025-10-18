import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserForm, UserTariffs, Register } from '@entities/form/types';

interface RegisterState {
  register: Register;
  profile: UserForm;
  tariffs: UserTariffs;
  profileSaved: boolean;
}

const initialState: RegisterState = {
  register: {
    login: '',
    password: '',
    returnPassword: '',
    email: '',
    mobile: '',
  },
  profile: {
    avatar: '',
    surname: '',
    name: '',
    family: '',
    city: '',
    street: '',
    house: '',
    flat: '',
  },
  tariffs: {
    electricity: '',
    water: '',
    gas: '',
    tube: '',
    trash: '',
    flatWall: '',
  },
  profileSaved: false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegister(state, action: PayloadAction<Partial<Register>>) {
      state.register = { ...state.register, ...action.payload };
    },
    setProfile(state, action: PayloadAction<Partial<UserForm>>) {
      state.profile = { ...state.profile, ...action.payload };
    },
    setTariffs(state, action: PayloadAction<Partial<UserTariffs>>) {
      state.tariffs = { ...state.tariffs, ...action.payload };
    },
    setProfileSaved(state, action: PayloadAction<boolean>) {
      state.profileSaved = action.payload;
    },
    resetRegister() {
      return initialState;
    },
  },
});

export const { setRegister, setProfile, setTariffs, resetRegister, setProfileSaved } =
  registerSlice.actions;
export default registerSlice.reducer;
