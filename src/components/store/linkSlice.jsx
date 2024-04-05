import { createSlice } from "@reduxjs/toolkit";

const userLinkSlice = createSlice({
    name: "link",
    initialState: {links: []},
    reducers: {
        getLinks(state, action) {
            state.links = action.payload
        }
    }
})

export const userLinkActions = userLinkSlice.actions
export default userLinkSlice