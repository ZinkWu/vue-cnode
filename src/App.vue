<template>
    <div id="app">
        <top-header></top-header>
        <div class="main">
            <post-list></post-list>
        </div>

    </div>
</template>

<script>
    import topHeader from './components/header'
    import PostList from './components/PostList'

    export default {
        name: 'App',
        components: {
            topHeader,
            PostList
        }
    }
</script>

<style lang="scss">
#app{
    background: #E1E1E1;
}    
.main{
    width: 80%;
    margin: 0 auto;
    margin-top: 16px;
}
</style>
