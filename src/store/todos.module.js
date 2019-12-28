import uuid from 'uuid/v1';


const state = {
    todoList: []
};

const getters = {
    todos(state){
        return state.todoList;
    },
    urgentTodos(state){
        return state.todoList.filter(x => x.urgent);
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
        state.todoList[itemIndex].completed = !state.todoList[itemIndex].completed;
        state.todoList = [...state.todoList]
    },
    toggleUrgent(state,payload){
        let itemIndex = state.todoList.findIndex(x => x.id === payload);
        state.todoList[itemIndex].urgent = !state.todoList[itemIndex].urgent;
        state.todoList = [...state.todoList]
    },
    changeTitle(state, payload){
        let itemIndex = state.todoList.findIndex(x => x.id === payload.id);
        state.todoList[itemIndex].title = payload.title;
        state.todoList = [...state.todoList]
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
