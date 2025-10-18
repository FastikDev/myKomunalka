import { configureStore } from '@reduxjs/toolkit';
import meterReducer from './slice/couters';
import registerReducer from './slice/register';

export const store = configureStore({
  reducer: {
    meter: meterReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
