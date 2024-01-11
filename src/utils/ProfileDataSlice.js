import { createSlice } from "@reduxjs/toolkit";

const ProfileDataSlice = createSlice({
    name: "ProfileDataSlice",
    initialState: {
        info: {}
    },
    reducers: {
        setInfo: (state, action) => {
            state.info = action.payload;
        },
        clearInfo: (state) => {
            state.info = {}
        }
    }
});


export const { setInfo, clearInfo } = ProfileDataSlice.actions;
export default ProfileDataSlice.reducer;