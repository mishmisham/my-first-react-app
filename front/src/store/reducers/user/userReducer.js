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

        logoutUser: (state) => {
            state.about = {
                name: ''
            }
        },
    },
});
  
export const {
    setupUser,
    logoutUser
} = userSlice.actions;

export default userSlice.reducer;
