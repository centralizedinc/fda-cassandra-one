import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class AnalyticsAPI {

    static getDockets() {
        return axios.get('/analytics/dockets');
    }

    static getCases() {
        return axios.get('/analytics/cases');
    }

    static getAppeals() {
        return axios.get('/analytics/appeals');
    }

}