import api from "@/api/AccountsAPI";

const initialState = {
    account_list:[],
    session_token:""
  };
  
  const state = initialState;
 
  const mutations = {
    INIT(state, token){
        Object.assign(state, initialState);
        state.ssession_token = token
    }
  }

  const actions ={
      FETCH_ACCOUNTS(context){
        return api.fetch()
      },
      ADD_ACCOUNT(context, account){
        return api.add(account)
      }
     
  }

  export default {
    state,
    mutations,
    actions
  };