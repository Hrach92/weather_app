import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weather = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1/" }),
  endpoints: (build) => ({
    findWeather: build.query({
      query: (text = "") =>
        `current.json?key=87e0e8edb650486da83184302230712&q=${text}`,
    }),
    findByIp: build.query({
      query: (ip = "") =>
        `current.json?key=87e0e8edb650486da83184302230712&q=${ip}`,
    }),
    getDays: build.query({
      query: (text = "") =>
        `forecast.json?key=87e0e8edb650486da83184302230712&q=${text}&days=7`,
    }),
  }),
});
export const { useFindWeatherQuery, useFindByIpQuery, useGetDaysQuery } =
  weather;
