import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {ILocation, IWeatherCard} from "../types/types";

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://api.openweathermap.org/`}),
    endpoints: (builder) => ({
        getLocations: builder.query<ILocation [], {locationName: string}>({
            query: ({locationName}) =>
                `geo/1.0/direct?q=${locationName}&limit=5&appid=${process.env["REACT_APP_API_KEY"]}`,
        }),
        getDataAboutLocation: builder.query<IWeatherCard, {locationName: string, locationCountry: string}>({
            query: ({locationName, locationCountry}) =>
                `data/2.5/weather?q=${locationName},%20${locationCountry}&appid=${process.env["REACT_APP_API_KEY"]}`
        }),
        getImage: builder.query<any, {iconName: string}>({
            query: ({iconName}) => `img/wn/${iconName}@4x.png`
        }),
    }),
});

export const {
    useGetLocationsQuery,
    useGetDataAboutLocationQuery,
    useGetImageQuery
} = weatherApi;
