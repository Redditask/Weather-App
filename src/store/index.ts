import {configureStore} from "@reduxjs/toolkit";

import {weatherApi} from "../API/weatherApi";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }).concat(weatherApi.middleware),
});
