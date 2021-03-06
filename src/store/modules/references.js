import api from "@/api/ReferenceAPI";

const initialState = {
  clusters: [],
  regions: [],
  areas:[],
  establishment_classification:[],
  session_token:""
};

const state = initialState;

//commits
const mutations = {
    INIT(state, token){
        Object.assign(state, initialState);
        state.session_token = token
    },
    SET_REFERENCES(state, data){
        state = data
    },
    SET_CLUSTERS(state, data){
        state.clusters = data
    }
}


//dispatches
const actions = {
    GET_REFERENCE(context, refresh){
        return new Promise((resolve, reject)=>{
            if(context.state.clusters.length === 0 
                || context.state.regions.length === 0 
                || context.state.areas.length === 0 
                || context.state.est_class.length === 0 
                || context.state.product_class.length === 0 
                || refresh){
                    api.init()
                    .then(results=>{
                        if(results.data.success){
                            context.commit('SET_REFERENCES', results.data.model)
                            resolve(results.data.model)
                        }else{
                            context.commit('SET_REFERENCES', context.state)
                            reject(results.data.errors)
                        }
                        
                    })
                    .catch(error =>{
                        context.commit('SET_REFERENCES', context.state)
                        reject(error)
                    })
                }else{
                    resolve(context.state)
                }
        })
    },
    GET_REFERENCE_TABLE(context){
        return api.findAll()
    },
    GET_CLUSTERS(context, refresh){
        return new Promise((resolve, reject)=>{
            if(context.state.clusters.length ===0 || refresh){
                api.findCollection('clusters')
                .then(results =>{
                    if(results.data.success){
                        context.commit('SET_CLUSTERS', results.data.model)
                        resolve(results.data.model)
                    }else{
                        context.commit('SET_CLUSTERS', context.state.clusters)
                        reject(results.data.errors) 
                    }
                })
                .catch(error=>{
                    context.commit('SET_CLUSTERS', context.state.clusters)
                    reject(error) 
                })
            }else{
                resolve(context.state.clusters)
            }
        })
    },

    ADD_REFERENCE_ITEM(context, item){
        return api.add(item)
    }
}


export default {
    state,
    mutations,
    actions
  };
