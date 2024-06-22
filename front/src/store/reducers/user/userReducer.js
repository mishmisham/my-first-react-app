import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        about: {
            name: ''
        }
    },
    reducers: {
        setupUser: (state, action) => {
            state.about = {
                ...state.about,
                ...action.payload
            }
        },
    },
});
  
export const { setupUser } = userSlice.actions;

export default userSlice.reducer;
