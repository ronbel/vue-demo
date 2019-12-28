<template>
    <div id="app">
        <Navbar/>
            <transition name="screen">
                <router-view></router-view>
            </transition>
    </div>
</template>

<script>

    import Navbar from "./components/Navbar";

    export default {
        name: 'app',
        components: {Navbar}
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

    #app{
        background: linear-gradient(83deg, #02b25f, #1f786b);
        flex: 1;
        min-height: 100%;
        padding-bottom: 20px;
    }

    * {
        box-sizing: border-box;
        font-family: "Roboto Condensed", sans-serif;
    }

    html, body {
        margin: 0;
        width: 100%;
        height: 100%;
    }

    .screen-leave-active, .screen-enter-active {
        transition: transform 0.5s ease, opacity 0.5s ease;
    }

    .screen-enter-active {
        transition-delay: 500ms;
    }

    .screen-enter, .screen-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }

    .screen-enter-to, .screen-leave {
        opacity: 1;
        transform: translateX(0);
    }

</style>
