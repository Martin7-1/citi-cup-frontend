import { createStore } from 'vuex'

export default createStore({
    state: {
        headerViews: '',
        currentOption: '',
        user:{},
        userId: 0,
        username: ''
    },
    mutations: {
        changeViews(state, payload){
            state.headerViews = payload;
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {

    },
    getters: {
        getUser: (state) => state.user
    }
})
