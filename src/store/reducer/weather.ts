import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weather = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_ENDPOINT}` }),
  endpoints: (build) => ({
    findWeather: build.query({
      query: (text) =>
        `current.json?key=${process.env.REACT_APP_API_KEY}&q=${text}`,
    }),
    findByIp: build.query({
      query: (ip) =>
        `current.json?key=${process.env.REACT_APP_API_KEY}&q=${ip}`,
    }),
  }),
});
export const { useFindWeatherQuery, useFindByIpQuery } = weather;
