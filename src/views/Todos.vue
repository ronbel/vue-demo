<template>
    <BasicLayout>
        <h1 slot="title">Todos</h1>
        <div slot="content" class="content">
            <label>Add a new todo</label>
            <div class="input-container">
                <input @keydown.enter="addTodo(newTodo), newTodo=''" class="todo-input" type="text" v-model="newTodo"/>
                <button @click="addTodo(newTodo), newTodo=''" class="add-button">Add Todo</button>
            </div>

            <p v-if="todos.length===0">Your todo list is empty. Write something!</p>


            <transition-group v-columns="2" v-else class="table" appear name="animated-todo">
                <TodoItem :key="item.id" v-for="item in todos" :item="item"/>
            </transition-group>


        </div>
    </BasicLayout>
</template>

<script>
    import BasicLayout from "../layouts/BasicLayout";
    import {mapActions, mapGetters} from 'vuex'
    import TodoItem from "../components/TodoItem";

    export default {
        name: "Todos",
        components: {TodoItem, BasicLayout},
        data() {
            return {
                newTodo: ''
            }
        },
        methods: {
            ...mapActions(['addTodo'])
        },
        computed: {
            ...mapGetters(['todos'])
        }
    }
</script>

<style lang="scss" scoped>

    .animated-todo-enter-active, .animated-todo-leave-active {
        transition: transform 300ms ease, opacity 300ms ease;
    }

    .animated-todo-enter, .animated-todo-leave-to {
        opacity: 0;
        transform: translateY(-40px);
    }

    .animated-todo-enter-to, .animated-todo-leave {
        opacity: 1;
        transform: translateY(0);
    }

    .content {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .input-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 350px;
    }

    .todo-input {
        width: 300px;
        height: 30px;
        border-radius: 10px;
        padding: 5px;
        margin-top: 10px;

        &:focus {
            outline: none;
        }
    }

    .add-button {
        width: 80px;
        margin-top: 10px;
        margin-left: 10px;
        height: 30px;
        border-radius: 5px;

        &:focus {
            outline: none;
        }
    }

    .table {
        margin-top: 20px;
    }

</style>
