import axios from "axios";

export default class WeatherServise {
    static async getData() {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=cb882b5f3403b3db76b413f0f3818697");
    }
}
