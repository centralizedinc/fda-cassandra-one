import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class DocketAPI {
    
    static findAll(){
        return axios.get('/roles/');
    }

    static find(name){
        return axios.get('/roles/'+name);
    }

    static add(role){
        return axios.post('/roles', role)
    }

    static edit(role){
        return axios.post('/roles/'+role._id, role)
    }
}