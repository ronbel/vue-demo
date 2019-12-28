<template>
    <div class="layout-container">
        <slot name="title"/>
        <div class="box-container">
            <slot name="content"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasicLayout"
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/colors.scss";

    .layout-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
    }

    .box-container{
        flex: 1;
        max-width: 90%;
        background-color: $pale-cornflower-blue;
        padding: 40px;
        border-radius: 20px;
    }
</style>
