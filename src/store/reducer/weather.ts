import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weather = createApi({
  reducerPath: "locations",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_ENDPOINT}` }),
  endpoints: (build) => ({
    findWeather: build.query({
      query: ({ query = "Yerevan", format = "m" }) =>
        `current?access_key=${process.env.REACT_APP_API_KEY}&query=${query}&units=${format}`,
    }),
  }),
});
export const { useFindWeatherQuery } = weather;
