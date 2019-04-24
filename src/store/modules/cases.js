
import api from "@/api/CasesAPI";

const initialState = {
  list: [],
  active: {}
};

const state = initialState;

const mutations = {
  INIT(state) {
    Object.assign(state, initialState);
  },
  SET_CASE_LIST(state, data) {
    state.list = data;
  },
  SET_ACTIVE_CASE(state, data) {
    state.active = data;
  }
};

const actions = {
    /**
     * @description finds all cases in the DB if there are no values found in the current session
     * @param {*} context 
     * @param {Boolean} refresh 
     * @returns {Promise}
     */
    GET_CASES(context, refresh){
        return new Promise((resolve, reject)=>{
            if(context.state.list.length ===0 || refresh){
                api.getAllCases()
                .then(results=>{
                    if(results.data.success){
                        context.commit('SET_CASE_LIST', result.data.model)
                        resolve(result.data.model)
                    }else{
                        context.commit('SET_CASE_LIST', context.state.list)
                        reject(result.data.errors)   
                    }                                                                   
                })
                .catch(error =>{
                    reject(error)
                })
            }else{
                resolve(context.state.list)
            }
        })        
    },

    /**
     * @description find case by id
     * @param {*} context 
     * @param {String} id 
     */
    GET_CASE_DETAILS(context, id){
        return new Promise((resolve, reject)=>{
            api.getCase(id)
            .then(result => {
                if(result.data.success){
                    context.commit('SET_ACTIVE_CASE', result.data.model)
                    resolve(result.data.model)
                }else{
                    context.commit('SET_ACTIVE_CASE', context.state.active)
                    reject(result.data.errors)
                }
            })
            .catch(error=>{
                context.commit('SET_ACTIVE_CASE', context.state.active)
                reject(error)
            })
        })
    },

    /**
     * @description creates new case
     * @param {*} context 
     * @param {DocketModel} details 
     */
    NEW_CASE(context, details){
        return api.createCase(details)
    },

    UPDATE_DOCKET(context, details){
        return api.updateCase(details)
    }
};

export default {
  state,
  mutations,
  actions
};
