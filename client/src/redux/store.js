import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./show";

const rootReducer = {
    show: showReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;