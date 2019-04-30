import api from "@/api/AnalyticsAPI";

const initialState = {
    dockets: {
        total: 0,
        data: []
    },
    cases: {
        total: 0,
        data: []
    },
    appeals: {
        total: 0,
        data: []
    },
    session_token: ""
};

const state = initialState;

const mutations = {
    INIT(state, token) {
        Object.assign(state, initialState);
        state.session_token = token;
    },
    SET_DOCKET_ANALYTICS(state, data) {
        state.dockets = data;
    },
    SET_CASES_ANALYTICS(state, data) {
        state.cases = data;
    },
    SET_APPEALS_ANALYTICS(state, data) {
        state.appeals = data;
    },
};

const actions = {
    GET_DOCKETS_ANALYTICS(context, refresh) {
        return new Promise((resolve, reject) => {
            if (context.state.dockets.data.length === 0 || refresh) {
                api
                    .getDockets()
                    .then(results => {
                        if (results.data.success) {
                            context.commit("SET_DOCKET_ANALYTICS", results.data.model);
                            resolve(results.data.model);
                        } else {
                            context.commit("SET_DOCKET_ANALYTICS", context.state.dockets);
                            reject(results.data.errors);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            } else {
                resolve(context.state.dockets);
            }
        });
    },

    GET_CASES_ANALYTICS(context, refresh) {
        return new Promise((resolve, reject) => {
            if (context.state.dockets.data.length === 0 || refresh) {
                api
                    .getCases()
                    .then(results => {
                        if (results.data.success) {
                            context.commit("SET_CASES_ANALYTICS", results.data.model);
                            resolve(results.data.model);
                        } else {
                            context.commit("SET_CASES_ANALYTICS", context.state.dockets);
                            reject(results.data.errors);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            } else {
                resolve(context.state.dockets);
            }
        });
    },

    GET_APPEALS_ANALYTICS(context, refresh) {
        return new Promise((resolve, reject) => {
            if (context.state.dockets.data.length === 0 || refresh) {
                api
                    .getAppeals()
                    .then(results => {
                        if (results.data.success) {
                            context.commit("SET_APPEALS_ANALYTICS", results.data.model);
                            resolve(results.data.model);
                        } else {
                            context.commit("SET_APPEALS_ANALYTICS", context.state.dockets);
                            reject(results.data.errors);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            } else {
                resolve(context.state.dockets);
            }
        });
    }
};

export default {
    state,
    mutations,
    actions
};