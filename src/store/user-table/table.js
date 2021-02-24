
import { FETCH_USERS } from '../actionTypes'
import { SET_USERS } from '../mutationTypes'
import data from '../../data.json'

const state = {
    users: []
}

const getters = {
    usersList(state) {
        return state.users;
    }
}

const actions = {
    [FETCH_USERS]({ commit }) {
        commit(SET_USERS, data)
    }
}

const mutations = {
    [SET_USERS](currentState, users) {
        currentState.users = users;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}