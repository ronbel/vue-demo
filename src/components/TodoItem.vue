<template>
    <div :class="['item-container', {completed: item.completed, urgent: item.urgent}]">
        <div class="upper-part">
            <p v-if="!editMode">{{ item.title }}</p>
            <div v-else>
            <input v-model="editedTitle" type="text"/> <button @click="changeTitle({id: item.id, title: editedTitle}), editMode = false">Save</button> <button @click="editMode = false">Cancel</button>
            </div>


            <input type="checkbox" @change="toggleComplete(item.id)" class="checkbox" :checked="item.completed">
        </div>

        <div class="buttons-container">
            <div @click="editMode = true, editedTitle = item.title" class="button-icon edit">
            </div>
            <div @click="deleteTodo(item.id)" class="button-icon delete">
            </div>
            <div @click="toggleUrgent(item.id)" class="button-icon urgent">
            </div>
        </div>

    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "TodoItem",
        data(){
            return{
                editMode: false,
                editedTitle: ''
            }
        },
        props: ['item'],
        methods:{
            ...mapMutations(['toggleComplete', 'toggleUrgent', 'deleteTodo', 'changeTitle'])
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/colors.scss";

    .item-container {
        height: 90px;
        width: 360px;
        border-radius: 10px;
        background: linear-gradient(white, rgb(230, 100, 101));
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &.completed {
            background: linear-gradient(white, $go-green);
        }

        &.urgent{
            border: 3px solid $deep-koamaru;
        }
    }

    .upper-part {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .checkbox{
        height: 20px;
        width: 20px;
        border-radius: 10px;
    }

    .buttons-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-bottom: 5px;

        .button-icon {
            height: 20px;
            width: 20px;
            margin-left: 10px;
            background-size: contain;
            cursor: pointer;

            &.edit{
                background-image: url("../assets/pencil-edit-button.svg");
            }

            &.delete{
                background-image: url("../assets/rubbish-bin.svg");
            }

            &.urgent{
                background-image: url("../assets/danger.svg");
            }
        }
    }

</style>
