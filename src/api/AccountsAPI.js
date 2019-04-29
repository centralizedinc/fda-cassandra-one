import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class AccountsAPI {

    static fetch(){
        return axios.get('/accounts')
    }

    static add(account){
        return axios.post('/accounts', account)
    }
}
