<template>
    <nav class="navbar">
        <router-link exact class="link" to="/">Home</router-link>
        <router-link exact class="link" to="/todos">Todos</router-link>
        <router-link exact class="link" to="about">About</router-link>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/colors.scss";

    .navbar{
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        background-color: $eerie-black;
        justify-content: center;
    }

    .link{
        font-family: "Roboto Condensed", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 40px;
        height: 100%;
        width: 100px;
        font-size: 1.3rem;
        text-decoration-line: none;
        background-color: $pewter-blue;
        color: black;
        transition: background-color 300ms ease, color 300ms ease;

        &.router-link-active{
            background-color: $deep-koamaru;
            color: white;
        }

        &:hover{
            filter: brightness(0.9);
        }
    }
</style>
