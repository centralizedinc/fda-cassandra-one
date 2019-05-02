import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class CommentsAPI {

    static getComments() {
        return axios.get('/comments');
    }

    static getCommentsByDtn(dtn) {
        console.log('dtn :', dtn);
        return axios.get('/comments/docket/' + dtn);
    }

    static addNewComment(details) {
        return axios.post('/comments', details);
    }

    static uploadFile(comply) {
        return axios.post('/upload?account_id=' + comply.dtn, comply.formData)
    }
}