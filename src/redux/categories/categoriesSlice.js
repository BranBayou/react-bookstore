import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const catagoriySlice = createSlice({
  name: 'catagory',
  initialState,
  reducers: {
    status: (state) => {
      state.count = 'under construction';
    },
  },
});

export const { status } = catagoriySlice.actions;

export default catagoriySlice.reducer;
