export const mutations = {
    SET_LOGGED_IN(state, payload){
        state.isLoggedIn = payload.isLoggedIn;
        state.user = payload.user;
        state.accessToken = payload.accessToken;
    }
}