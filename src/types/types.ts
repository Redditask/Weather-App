export interface ILocation {
    country: string;
    lat: number;
    lon: number;
    name: string;
}

export interface IWeatherCard {
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: {
        main: string;
        icon: string;
    };
}
