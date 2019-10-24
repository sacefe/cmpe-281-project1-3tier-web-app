import {actions} from './auth.actions';
import {mutations} from './auth.mutations';

const state = {
    isLoggedIn: false,
    accessToken: '',
    user: {}
};

const getters = {
    isLoggedIn: (state) => {
        return state.isLoggedIn;
    },
    getAccessToken: (state) => {
        return state.accessToken;
    },
    getUser: (state) => {
        return state.user
    },
    // getAllFiles: (state) => {
    //     return state.getAllfiles
    // }

}

const namespaced = true;

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
