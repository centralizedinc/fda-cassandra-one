import api from "@/api/RolesAPI";


const initialState = {
    list:[]
  };

const state = initialState;

const mutations = {
    INIT(state){
        Object.assign(state, initialState);
    },
    SET_LIST(state, list){
        state.list = list
    }
}

const actions = {
    GET_ROLES(context){
        return api.findAll()
    },

    FIND_ROLE(context, role){
        return api.find(role);
    },

    ADD_ROLE(context, role){
        return api.add(role)
    }

}

export default {
    state,
    mutations,
    actions
  };