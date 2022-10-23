import axios from "axios";

export default class WeatherServise {
    static async getCoordinates(location) {
        return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=cb882b5f3403b3db76b413f0f3818697`)
    }

    static async getData(location) {
        let coordinates = await WeatherServise.getCoordinates(location);
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.data[0].lat}&lon=${coordinates.data[0].lon}&appid=cb882b5f3403b3db76b413f0f3818697`);
    }
}
