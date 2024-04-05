import { createSlice } from "@reduxjs/toolkit";

const userInformationSlice = createSlice({
    name: 'userInformation',
    initialState: {
        firstName: "",
        surName: "",
        email: ""
    },
    reducers: {
        save(state, action) {
            const payloads = action.payload

            state.firstName = payloads.firstName
            state.surName = payloads.lastName
            state.email = payloads.email
        }

    }
})

export const userInformationActions = userInformationSlice.actions
export default userInformationSlice