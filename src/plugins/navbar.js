export default {
    install(Vue, store) {
        Vue.prototype.$showNavbar = () => {
            store.commit('VISIBLE', true);
        }

        Vue.prototype.$hideNavbar = () => {
            store.commit('VISIBLE', false);
        }

        Vue.prototype.$miniNavbar = () => {
            store.commit('MINIFIED', true);
        }

        Vue.prototype.$defaultNavbar = () => {
            store.commit('MINIFIED', false);
        }        
    }
}