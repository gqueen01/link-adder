import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: {
        img: ""
    },
    reducers: {
        getIMg(state, action) {
            const payloads = action.payload
            if (typeof payloads === 'string') {
                state.img = payloads
            }
        }
    }
})

export const userProfileActions = userProfileSlice.actions
export default userProfileSlice