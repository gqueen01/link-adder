import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from "redux";
import userInformationSlice from './userInformationSlice';
import userProfileSlice from "./userProfileSlice";
import userLinkSlice from "./linkSlice";

// const loggerMiddleware = (store) => (next) => (action) => {
//     console.log(`dispatching action type: ${action.type}`);
//     return next(action);
//   };

const persistConfig = {
    key: "linkAdder",
    storage
}

const reducers = combineReducers({
    userInformation: userInformationSlice.reducer,
    userProfile: userProfileSlice.reducer,
    userLink: userLinkSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})

const persistor = persistStore(store)

export { store, persistor }