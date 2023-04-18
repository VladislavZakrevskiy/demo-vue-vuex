<template>
    <div class="navbar">
        <div>Vue-SCUD</div>
            <Button @click="this.$router.push({path: '/'})">Welcome</Button>
            <Button @click="this.$router.push({path: '/posts'})">Posts</Button>
            <Button @click="this.$router.push({path: '/vxposts'})">Stored Posts</Button>
            <Button @click="this.$router.push({path: '/about'})">About site</Button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar {
        height: 50px;
        background: lightblue;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;;
    }
</style>