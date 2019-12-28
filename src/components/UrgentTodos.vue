<template>
    <div class="container">
        <h2>Your Urgent Todos</h2>
        <p v-if="urgentTodos.length === 0">You have no urgent todos, yay</p>
        <transition-group @after-appear="removeDelay" @before-enter="waitForLastToExit" @before-appear="addDelay" appear name="flying" v-else v-columns="1">
            <TodoItem :data-index="index" :key="item.id" v-for="(item, index) in urgentTodos.slice(0,3)" :item="item"/>
        </transition-group>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import TodoItem from "./TodoItem";

    export default {
        name: "UrgentTodos",
        components: {TodoItem},
        computed: {
            ...mapGetters(['urgentTodos'])
        },
        methods: {
            addDelay(el){
                el.style.transitionDelay = `${1000+100*el.dataset.index}ms`;
            },
            waitForLastToExit(el){
              el.style.transitionDelay = '200ms';
            },
            removeDelay(el){
                el.style['transition-delay'] = '0ms';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: column;
    }

    .flying-enter-active, .flying-leave-active{
        transition: transform 200ms ease, opacity 200ms ease;
    }

    .flying-enter, .flying-leave-to{
        transform: translateX(200px);
        opacity: 0;
    }

    .flying-enter-to, .flying-leave{
        transform: translateX(0);
        opacity: 1;
    }
</style>
