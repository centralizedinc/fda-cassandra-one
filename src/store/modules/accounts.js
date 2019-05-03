import api from "@/api/AccountsAPI";

const initialState = {
  account_list: [],
  session_token: ""
};

const state = initialState;

const mutations = {
  INIT(state, token) {
    Object.assign(state, initialState);
    state.ssession_token = token
  },
  SET_ACCOUNTS(state, data) {
    state.account_list = data;
  }
}

const actions = {
  FETCH_ACCOUNTS(context) {
    return api.fetch()
  },
  ADD_ACCOUNT(context, account) {
    return api.add(account)
  },
  EDIT_ACCOUNT(context, account) {
    return api.edit(account)
  },
  GET_ACCOUNTS(context, refresh) {
    return new Promise((resolve, reject) => {
      if (refresh || !context.state.account_list.length) {
        api.fetch()
          .then((result) => {
            if (result.data.success) {
              context.commit('SET_ACCOUNTS', result.data.model)
              resolve(result.data.model)
            } else {
              reject(result.data.errors)
            }
          }).catch((err) => {
            reject(err)
          });
      } else {
        resolve(context.state.account_list)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
};