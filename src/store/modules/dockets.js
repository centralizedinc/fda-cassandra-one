import api from "../../api/DocketsAPI";

const initialState = {
  list: [],
  eval_list: [],
  review_list: [],
  approval_list: [],
  finalization_list: [],
  execution_list: [],
  appeal_list: [],
  active: {},
  session_token: ""
};

const state = initialState;

const mutations = {
  INIT(state, token) {
    Object.assign(state, initialState);
    state.session_token = token;
  },
  SET_DOCKET_LIST(state, data) {
    state.list = data;
  },
  SET_ACTIVE_DOCKET(state, data) {
    state.active = data;
  }
};

const actions = {
  /**
   * @description finds all dockets in the DB if there are no values found in the current session
   * @param {*} context
   * @param {Boolean} refresh
   * @returns {Promise}
   */
  GET_DOCKETS(context, refresh) {
    return new Promise((resolve, reject) => {
      if (context.state.list.length === 0 || refresh) {
        api
          .getAllDockets()
          .then(results => {
            if (results.data.success) {
              context.commit("SET_DOCKET_LIST", results.data.model);
              resolve(results.data.model);
            } else {
              context.commit("SET_DOCKET_LIST", context.state.list);
              reject(results.data.errors);
            }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        resolve(context.state.list);
      }
    });
  },

  /**
   * @description finds all dockets in the DB if there are no values found in the current session
   * @param {*} context
   * @param {Boolean} refresh
   * @returns {Promise}
   */
  GET_DOCKETS_EVALUATION(context, refresh) {
    return new Promise((resolve, reject) => {
      if (context.state.list.length === 0 || refresh) {
        api
          .getDocketsByStatus(0)
          .then(results => {
            if (results.data.success) {
              context.commit("SET_DOCKET_LIST", results.data.model);
              resolve(results.data.model);
            } else {
              context.commit("SET_DOCKET_LIST", context.state.list);
              reject(results.data.errors);
            }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        resolve(context.state.list);
      }
    });
  },

  /**
   * @description finds all dockets in the DB if there are no values found in the current session
   * @param {*} context
   * @param {Boolean} refresh
   * @returns {Promise}
   */
  GET_DOCKETS_REVIEW(context, refresh) {
    return new Promise((resolve, reject) => {
      if (context.state.list.length === 0 || refresh) {
        api
          .getDocketsByStatus(1)
          .then(results => {
            if (results.data.success) {
              context.commit("SET_DOCKET_LIST", results.data.model);
              resolve(results.data.model);
            } else {
              context.commit("SET_DOCKET_LIST", context.state.list);
              reject(results.data.errors);
            }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        resolve(context.state.list);
      }
    });
  },

  /**
   * @description finds all dockets in the DB if there are no values found in the current session
   * @param {*} context
   * @param {Boolean} refresh
   * @returns {Promise}
   */
  GET_DOCKETS_APPROVAL(context, refresh) {
    return new Promise((resolve, reject) => {
      if (context.state.list.length === 0 || refresh) {
        api
          .getDocketsByStatus(2)
          .then(results => {
            if (results.data.success) {
              context.commit("SET_DOCKET_LIST", results.data.model);
              resolve(results.data.model);
            } else {
              context.commit("SET_DOCKET_LIST", context.state.list);
              reject(results.data.errors);
            }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        resolve(context.state.list);
      }
    });
  },

  /**
   * @description finds all dockets in the DB if there are no values found in the current session
   * @param {*} context
   * @param {Boolean} refresh
   * @returns {Promise}
   */
  GET_DOCKETS_FINALIZE(context, refresh) {
    return new Promise((resolve, reject) => {
      if (context.state.list.length === 0 || refresh) {
        api
          .getDocketsByStatus(3)
          .then(results => {
            if (results.data.success) {
              context.commit("SET_DOCKET_LIST", results.data.model);
              resolve(results.data.model);
            } else {
              context.commit("SET_DOCKET_LIST", context.state.list);
              reject(results.data.errors);
            }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        resolve(context.state.list);
      }
    });
  },

  /**
   * @description finds all dockets in the DB if there are no values found in the current session
   * @param {*} context
   * @param {Boolean} refresh
   * @returns {Promise}
   */
  GET_DOCKETS_EXECUTE(context, refresh) {
    return new Promise((resolve, reject) => {
      if (context.state.list.length === 0 || refresh) {
        api
          .getDocketsByStatus(4)
          .then(results => {
            if (results.data.success) {
              context.commit("SET_DOCKET_LIST", results.data.model);
              resolve(results.data.model);
            } else {
              context.commit("SET_DOCKET_LIST", context.state.list);
              reject(results.data.errors);
            }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        resolve(context.state.list);
      }
    });
  },

  /**
   * @description find docket by id
   * @param {*} context
   * @param {String} id
   */
  GET_DOCKET_DETAILS(context, id) {
    return new Promise((resolve, reject) => {
      api
        .getDocket(id)
        .then(result => {
          if (result.data.success) {
            context.commit("SET_ACTIVE_DOCKET", result.data.model);
            resolve(result.data.model);
          } else {
            context.commit("SET_ACTIVE_DOCKET", context.state.active);
            reject(result.data.errors);
          }
        })
        .catch(error => {
          context.commit("SET_ACTIVE_DOCKET", context.state.active);
          reject(error);
        });
    });
  },

  /**
   * @description creates new docket
   * @param {*} context
   * @param {DocketModel} details
   */
  NEW_DOCKET(context, details) {
    return api.createDocket(details);
  },

  UPDATE_DOCKET(context, docket) {
    return new Promise((resolve, reject) => {
      api.updateDocket(docket)
        .then(results => {
          if (results.data.success) {
            context.dispatch('GET_DOCKETS_APPROVAL', true)
            resolve();
          } else {
            reject(results.data.errors);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  ADD_COMMENT(context, {
    docket,
    activity,
    formData
  }) {
    return new Promise((resolve, reject) => {
      if (formData) {
        api.uploadFile({
            dtn: docket.dtn,
            formData
          }).then((result) => {
            var files = result.data.model
            docket.documents.concat(files)
            activity.documents = files
            docket.activities.push(activity)
            return api.updateDocket(docket)
          })
          .then(results => {
            if (results.data.success) {
              context.dispatch('GET_DOCKETS_APPROVAL', true)
              resolve();
            } else {
              reject(results.data.errors);
            }
          })
          .catch((err) => {

          });
      } else {
        docket.activities.push(activity)
        api.updateDocket(docket)
          .then(results => {
            if (results.data.success) {
              context.dispatch('GET_DOCKETS_APPROVAL', true)
              resolve();
            } else {
              reject(results.data.errors);
            }
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
};