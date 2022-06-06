import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./show";
import carReducer from "./cars";

const rootReducer = {
    show: showReducer,
    cars: carReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;