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
            // if (('refreshToken' in action.payload) && undefined !== window) {
            //     localStorage.setItem('refreshToken', action.payload.refreshToken);
            // }

            state.about = {
                ...state.about,
                ...action.payload
            }
        },
    },
});
  
export const { setupUser } = userSlice.actions;

export default userSlice.reducer;
