// import RegistrationAPI from "@/api/RegistrationAPI";
import api from "@/api/UserAPI";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
  task: {},
  registration_details: {}
};

const state = initialState;

const mutations = {
  INIT(state) {
    Object.assign(state, initialState);
  },
  LOGIN: function(state, payload) {
    state.user = payload.user;
    state.token = payload.token;
    state.isAuthenticated = payload.isMatch;
    console.log('LOGIN STATE: ' + JSON.stringify(state))
  },
  LOGOUT: function(state) {
    state.user = {};
    state.token = false;
    state.isAuthenticated = false;
  },
};

var actions = {
  /**
   * @description check if the user session is valid or activated
   */
  CHECK_SESSION: (context, username) => {
    return new Promise((resolve, reject) => {
      api.verifyStatus(username, (result, err) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  //   /**
  //    * @description invoke Registration API
  //    */
  //   REGISTER: (context, account) => {
  //     return new Promise((resolve, reject) => {
  //       RegistrationAPI.register(account, (res, err) => {
  //         if (!err) {
  //           resolve(res)
  //         } else {
  //           reject(err)
  //         }
  //       });
  //     })
  //   },

  //   /**
  //    * @description email confirmation
  //    */
  //   CONFIRM: (context, key) => {
  //     return new Promise((resolve, reject) => {
  //       RegistrationAPI.confirm(key, (res, err) => {
  //         if (!err) {
  //           resolve(res)
  //         } else {
  //           reject(err)
  //         }
  //       })
  //     })
  //   },

  /**
   * @description invoke LOGIN API
   */
  LOGIN: (context, credentials) => {
    return new Promise((resolve, reject) => {
      api.login(credentials)
      .then(result =>{
        if(result.data.success){
          console.log("LOGIN: "+ JSON.stringify(result.data))
          context.commit("INIT", result.data.model.token);
          context.commit("LOGIN", result.data.model);          
          resolve(result.data.model)
        }else{
          reject(result.data.error)
        }
      })
      .catch(err=>{
        console.log(err);
        reject(err);
      })
    })      
  },

  /**
   * @description remove user session and breadcrumbs history stored in cache
   */
  LOGOUT: context => {
    context.commit("LOGOUT");
    context.commit("INIT");
  },

  /**
   * @description send account recovery
   */
  FORGOT_PASSWORD: (context, email) => {
    return new Promise((resolve, reject) => {
      api.forgotPassword(email, (res, err) => {
        if (!err) {
          resolve(res);
        } else {
          console.log(JSON.stringify(err));
          reject(err);
        }
      });
    });
  },

  CONFIRM_ACCOUNT_RECOVERY: (context, key) => {
    return new Promise((resolve, reject) => {
      api.confirmAccountRecovery(key, (res, err) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  },

  /**
   * @description change user password
   */
  CHANGE_PASSWORD: function(context, account) {
    return new Promise((resolve, reject) => {
      api.changePassword(account, (res, err) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  },

  UPDATE_ACCOUNT: (context, account) => {
    return api.updateAccount(account);
  },

  FIND_ACCOUNT: (context, account) => {
    return api.findAccount(account);
  }
};

export default {
  state,
  mutations,
  actions
};
