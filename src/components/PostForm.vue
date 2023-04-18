<template>
    <form class="form" @submit="$event.preventDefault()">
        <TextField 
            v-model="post.title" 
            type="text" 
            placeholder="Title"
        />
        <TextField 
            v-model="post.body" 
            type="text" 
            placeholder="Body"
        />
        <Button 
            @click="createPost" 
            class="btn"
        >
            Create
        </Button>
    </form>
</template>

<script>

    export default {
    data() {
        return {
            post: { title: "", body: "" }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = { body: "", title: "" };
        }
    },
}
</script>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


</style>