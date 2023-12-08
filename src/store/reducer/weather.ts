import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weather = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1/" }),
  endpoints: (build) => ({
    findWeather: build.query({
      query: (text = "") =>
        `api/current.json?key=87e0e8edb650486da83184302230712&q=${text}`,
    }),
    findByIp: build.query({
      query: (ip = "") =>
        `api/current.json?key=87e0e8edb650486da83184302230712&q=${ip}`,
    }),
    getDays: build.query({
      query: (text = "") =>
        `api/forecast.json?key=87e0e8edb650486da83184302230712&q=${text}&days=7`,
    }),
  }),
});
export const { useFindWeatherQuery, useFindByIpQuery, useGetDaysQuery } =
  weather;
