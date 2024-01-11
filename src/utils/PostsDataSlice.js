import { createSlice } from "@reduxjs/toolkit";

const PostsDataSlice = createSlice({
    name: "PostsDataSlice",
    initialState: {
        posts: []
    },
    reducers: {
        addPostsToDatabase: (state, action) => {
            action.payload.forEach((post) => state.posts.push(post));
        },
        deletePostsFromDatabase: (state) => {
            state.posts.length = 0;
        }
    }
});


export const { addPostsToDatabase, deletePostsFromDatabase } = PostsDataSlice.actions;
export default PostsDataSlice.reducer;