import PostsDataSliceReducer from "./PostsDataSlice";
import { configureStore } from "@reduxjs/toolkit";
import profileInfoSlice from "./ProfileDataSlice";

const AppDataStore = configureStore({
    reducer: {
        postsData: PostsDataSliceReducer,
        profileInfo: profileInfoSlice
    }
});

export default AppDataStore;