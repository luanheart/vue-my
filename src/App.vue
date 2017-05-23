<template>
    <div id="app">
        <ci-topbar style="position: fixed; margin-top: 0; z-index: 99"></ci-topbar>

        <div id="page-wrapper" class="container-fluid" style="margin-top: 50px;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        overflow: hidden;
    }
</style>
