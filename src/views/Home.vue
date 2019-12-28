<template>
    <div>
        <BasicLayout>
            <h1 slot="title">{{"Home" | uppercase}}</h1>
            <div class="dashboard" slot="content">
                <div class="left-part">
                    <h1>Welcome to your dashboard!</h1>
                    <span>Here you can see your super urgent todos and...other stuff, I guess</span>
                </div>
                <UrgentTodos/>
            </div>

        </BasicLayout>
    </div>
</template>

<script>
    import BasicLayout from "../layouts/BasicLayout";
    import UrgentTodos from "../components/UrgentTodos";

    export default {
        name: "Home",
        components: {UrgentTodos, BasicLayout}
    }
</script>

<style scoped>

    .dashboard {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .left-part{
        margin-right: 20px;
    }

</style>
