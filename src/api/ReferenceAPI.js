import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class DocketAPI {
    
    static findCollection(name){
        return axios.get('/references/'+name);
    }

    static init(){
        return axios.get('/references/');
    }
}