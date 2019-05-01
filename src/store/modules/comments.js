import api from "../../api/CommentsAPI";

const initialState = {
    comments: [],
    session_token: ""
};

const state = initialState;

const mutations = {
    INIT(state, token) {
        Object.assign(state, initialState);
        state.session_token = token;
    },
    SET_COMMENTS(state, data) {
        state.comments = data;
    }
};

const actions = {
    GET_COMMENTS(context) {
        return new Promise((resolve, reject) => {
            if (context.rootState.dockets.active && context.rootState.dockets.active.dtn) {
                api
                    .getCommentsByDtn(context.rootState.dockets.active.dtn)
                    .then(results => {
                        if (results.data.success) {
                            context.commit("SET_COMMENTS", results.data.model);
                            resolve(results.data.model);
                        } else {
                            context.commit("SET_COMMENTS", context.state.comments);
                            reject(results.data.errors);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            } else {
                resolve(context.state.comments);
            }
        });
    },

    ADD_COMMENT(context, data) {
        return new Promise((resolve, reject) => {
            api
                .addNewComment(data)
                .then(results => {
                    if (results.data.success) {
                        context.dispatch('GET_COMMENTS', {
                            dtn: data.dtn,
                            refresh: true
                        })
                        resolve(context.state.comments);
                    } else {
                        context.commit("SET_COMMENTS", context.state.comments);
                        reject(results.data.errors);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};

export default {
    state,
    mutations,
    actions
};