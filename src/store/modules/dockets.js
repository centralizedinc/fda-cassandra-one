
import api from "@/api/DocketsAPI";

const initialState = {
  list: [],
  active: {}
};

const state = initialState;

const mutations = {
  INIT(state) {
    Object.assign(state, initialState);
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
    GET_DOCKETS(context, refresh){
        return new Promise((resolve, reject)=>{
            if(context.state.list.length ===0 || refresh){
                api.getAllDockets()
                .then(results=>{
                    if(results.data.success){
                        context.commit(SET_DOCKET_LIST, result.data.model)
                        resolve(result.data.model)
                    }else{
                        context.commit(SET_DOCKET_LIST, context.state.list)
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
     * @description find docket by id
     * @param {*} context 
     * @param {String} id 
     */
    GET_DOCKET_DETAILS(context, id){
        return new Promise((resolve, reject)=>{
            api.getDocket(id)
            .then(result => {
                if(result.data.success){
                    context.commit('SET_ACTIVE_DOCKET', result.data.model)
                    resolve(result.data.model)
                }else{
                    context.commit('SET_ACTIVE_DOCKET', context.state.active)
                    reject(result.data.errors)
                }
            })
            .catch(error=>{
                context.commit('SET_ACTIVE_DOCKET', context.state.active)
                reject(error)
            })
        })
    },

    /**
     * @description creates new docket
     * @param {*} context 
     * @param {DocketModel} details 
     */
    NEW_DOCKET(context, details){
        return api.createDocket(details)
    },

    UPDATE_DOCKET(context, details){
        return api.updateDocket(details)
    }
};

export default {
  state,
  mutations,
  actions
};
