import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class DocketAPI {

    static getAllDockets() {
        return axios.get('/dockets');
    }

    static getDocketsByStatus(status) {
        return axios.get('/dockets/status/' + status);
    }

    static getDocket(id) {
        return axios.get('/dockets/' + id);
    }

    static createDocket(details) {
        // return axios.post('/dockets', details)
        var new_docket = {};
        return new Promise((resolve, reject) => {
            axios.post('/dockets', details.docket)
                .then(docket => {
                    new_docket = docket.data.model;
                    if (docket.data.success) {
                        return axios.post('/upload?account_id=' + new_docket.dtn, details.documents)
                    } else {
                        reject(docket.data.errors)
                    }
                })
                .then(uploads => {
                    if (uploads.data.success) {
                        new_docket.documents = uploads.data.model
                        return axios.post('/dockets/' + new_docket._id, new_docket)
                    } else {
                        reject(uploads.data.errors)
                    }
                })
                .then(update_docket => {
                    if (update_docket.data.success) {
                        resolve(update_docket.data.model)
                    } else {
                        reject(update_docket.data.errors)
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    static updateDocket(details) {
        return axios.post('/dockets/' + details._id, details)
    }

    static uploadFile(data) {
        return axios.post('/upload?account_id=' + data.dtn, data.formData)
    }

    static getDocketsByUser(username) {
        return axios.get('/dockets/user/' + username);
    }
}