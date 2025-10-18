import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MeterState {
  electricity: string | number;
  water: string | number;
  gas: string | number;
}

const initialState: MeterState = {
  electricity: 0,
  water: 0,
  gas: 0,
};

const meterSlice = createSlice({
  name: 'meter',
  initialState,
  reducers: {
    setMeterValue: (
      state,
      action: PayloadAction<{ type: keyof MeterState; value: string | number }>,
    ) => {
      const { type, value } = action.payload;
      state[type] = value;
    },
  },
});

export const { setMeterValue } = meterSlice.actions;
export default meterSlice.reducer;
