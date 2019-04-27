
const initialState = {
    show: true,
    mini: false
  };

const state = initialState;

const mutations = {
    INIT(state){
        Object.assign(state, initialState);
    },
    VISIBLE(state, visibility){
        state.show = visibility
    },
    MINIFIED(state, mini){
        state.mini = mini
    }
}

export default {
    state,
    mutations
  };