import uuid from 'uuid/v1';
import Vue from 'vue';

const state = {
    todoList: []
};

const getters = {
    todos(state){
        return state.todoList;
    },
    urgentTodos(state){
        return state.todoList.filter(x => x.urgent && !x.completed);
    }
};

const mutations = {
    insertTodo(state, newTodo){
        state.todoList.push(newTodo)
    },
    deleteTodo(state, payload){
      state.todoList = state.todoList.filter( x => x.id !== payload);
    },
    toggleComplete(state, payload){
        let itemIndex = state.todoList.findIndex(x => x.id === payload);
        Vue.set(state.todoList[itemIndex], 'completed', !state.todoList[itemIndex].completed)
    },
    toggleUrgent(state,payload){
        let itemIndex = state.todoList.findIndex(x => x.id === payload);
        Vue.set(state.todoList[itemIndex], 'urgent', !state.todoList[itemIndex].urgent)
    },
    changeTitle(state, payload){
        let itemIndex = state.todoList.findIndex(x => x.id === payload.id);
        Vue.set(state.todoList[itemIndex], 'title', payload.title)
    }
};

const actions = {
    addTodo(context, title){
        if(title.trim() === ''){
            return;
        }

        let newTodo = {id: uuid(), title, completed: false, urgent: false};
        context.commit('insertTodo', newTodo)
    }
};

export default {
    state, getters, mutations, actions
}
