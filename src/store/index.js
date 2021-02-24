
import { createStore } from 'vuex';
import users from './user-table/table'


export const store = createStore({
    modules: {
        users
    }
})