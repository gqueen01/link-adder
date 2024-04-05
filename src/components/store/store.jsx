import { configureStore } from "@reduxjs/toolkit";
import userInformationSlice from './userInformationSlice';
import userProfileSlice from "./userProfileSlice";
import userLinkSlice from "./linkSlice";

const store = configureStore({
    reducer: {
        userInformation: userInformationSlice.reducer,
        userProfile: userProfileSlice.reducer,
        userLink: userLinkSlice.reducer
    }
})

export default store