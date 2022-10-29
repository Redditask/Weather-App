import axios from "axios";

export default class WeatherServise {
    static async getCoordinates(location) {
        return axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location.name}&limit=5&appid=cb882b5f3403b3db76b413f0f3818697`)
    }

    static async getData(location) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.name},%20${location.country}&appid=cb882b5f3403b3db76b413f0f3818697`);
    }
}
