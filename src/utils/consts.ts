import {ILocation, ILocationInfo} from "../types/types";

export const locationInitialState: ILocation = {
    country: "", lat: 0, lon: 0, name: "",
};

export const locationInfoInitialState: ILocationInfo = {
    main: {humidity: 0, temp: 0}, weather: [{icon: "", main: ""}], wind: {speed: 0},
};
