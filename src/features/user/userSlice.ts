import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { userState } from '../../helpers/Type';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    name: '',
    role: '',
    thumbnail: '',
  } as userState,
  reducers: {
    setUser: (state, action: PayloadAction<userState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.thumbnail = action.payload.thumbnail;
    },
    getUser: (state) => {
      return state;
    },
  },
});

export const { setUser, getUser } = userSlice.actions;
export const selectUser = (state: RootState): typeof state.user => state.user;
export const reducer = userSlice.reducer;
export default reducer;
