import { configureStore } from "@reduxjs/toolkit";
import { weather } from "./reducer/weather";

export const store = configureStore({
  reducer: { [weather.reducerPath]: weather.reducer },
  middleware: (getDefaultMiddleware): any => {
    return getDefaultMiddleware().concat(weather.middleware);
  },
});
