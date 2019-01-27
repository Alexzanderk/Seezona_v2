import Axios from 'axios';

class Api {
    constructor() {
        this.axios = Axios.create({
           baseURL:  'https://api.openweathermap.org/data/2.5/',
           timeout: 30000,
           params: {
            appid: '040d409174c754d7cb6ab9137c5c40a1',
            lang: 'ru'
           }
        })
    }

    getCurrentWeather(city, unit) {
        return this.axios.get(this.axios.defaults.baseURL + `weather?q=${city.toLocaleLowerCase()}&units=${unit}`)
    }

    getForcaseWeather(city, unit) {
        return this.axios.get(this.axios.defaults.baseURL + `forecast?q=${city.toLocaleLowerCase()}&units=${unit}`)
    }
}

export default new Api();
