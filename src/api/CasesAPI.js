import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class CasesAPI {
    
    static getAllCases(){
        return axios.get('/cases');
    }

    static getCase(id){
        return axios.get('/cases/'+id);
    }

    static createCase(details){
        return axios.post('/cases', details)
    }

    static updateCase(details){
        return axios.post('/cases/'+details.id, details)
    }
}