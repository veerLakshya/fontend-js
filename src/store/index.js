import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import { apiSlice } from "./ApiSlice";
import authSlice from "./AuthSlice";
const appStore = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		currUser: UserSlice.reducer,
		auth: authSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});
export default appStore;
