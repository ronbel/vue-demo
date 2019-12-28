import VueX from 'vuex';
import Vue from "vue";
import todos from './todos.module'


Vue.use(VueX);

export default new VueX.Store({
    modules: {
        todos
    }
})
