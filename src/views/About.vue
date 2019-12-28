<template>
    <BasicLayout>
        <h2 slot="title">About</h2>
        <p slot="content" class="cool-font">This is my Vue.js demo for Storrsoft. Hope you like it!</p>
        <p slot="content">I used some basic Vue tools to make this like transitions, Vue Router, VueX, custom directives and filters</p>
    </BasicLayout>
</template>

<script>
    import BasicLayout from "../layouts/BasicLayout";
    export default {
        name: 'About',
        components: {BasicLayout}
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/colors.scss";
    .cool-font{
        text-align: center;
        font-size: 1.5rem;
        color: $go-green;
    }
</style>
