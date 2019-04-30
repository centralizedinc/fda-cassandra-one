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
    activities: [],
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
    SET_ACTIVITIES_ANALYTICS(state, data) {
        state.activities = data;
    }
};

const actions = {
    GET_DOCKETS_ANALYTICS(context, refresh) {
        return new Promise((resolve, reject) => {
            if (!context.state.dockets.data.length || refresh) {
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
            if (!context.state.cases.data.length || refresh) {
                api
                    .getCases()
                    .then(results => {
                        if (results.data.success) {
                            context.commit("SET_CASES_ANALYTICS", results.data.model);
                            resolve(results.data.model);
                        } else {
                            context.commit("SET_CASES_ANALYTICS", context.state.cases);
                            reject(results.data.errors);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            } else {
                resolve(context.state.cases);
            }
        });
    },

    GET_APPEALS_ANALYTICS(context, refresh) {
        return new Promise((resolve, reject) => {
            if (!context.state.appeals.data.length || refresh) {
                api
                    .getAppeals()
                    .then(results => {
                        if (results.data.success) {
                            context.commit("SET_APPEALS_ANALYTICS", results.data.model);
                            resolve(results.data.model);
                        } else {
                            context.commit("SET_APPEALS_ANALYTICS", context.state.appeals);
                            reject(results.data.errors);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            } else {
                resolve(context.state.appeals);
            }
        });
    },

    GET_ACTIVITIES_ANALYTICS(context, refresh) {
        return new Promise((resolve, reject) => {
            if (!context.state.activities.length || refresh) {
                api.getActivities()
                    .then(results => {
                        if (results.data.success) {
                            context.commit("SET_ACTIVITIES_ANALYTICS", results.data.model);
                            resolve(results.data.model);
                        } else {
                            context.commit("SET_ACTIVITIES_ANALYTICS", context.state.activities);
                            reject(results.data.errors);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            } else {
                resolve(context.state.activities);
            }
        });
    }
};

export default {
    state,
    mutations,
    actions
};