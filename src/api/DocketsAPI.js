import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class DocketAPI {
    
    static getAllDockets(){
        return axios.get('/dockets');
    }

    static getDocket(id){
        return axios.get('/dockets/'+id);
    }

    static createDocket(details){
        return axios.post('/dockets', details)
    }

    static updateDocket(details){
        return axios.post('/dockets/'+details.id, details)
    }
}