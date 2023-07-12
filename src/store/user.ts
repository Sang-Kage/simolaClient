import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    name: '',
    role: '',
  },
  reducers: {
    setUser (state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    getUser (state) {
      return state;
    }
  }
});

export default userSlice.reducer;