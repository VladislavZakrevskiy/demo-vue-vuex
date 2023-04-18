<template>
    <div class="post">
        <div>
            <div><strong>Title: </strong>{{ post.title }}</div>
            <div><strong>Body: </strong>{{ post.body }}</div>
        </div>
        <div class="post_btns">
            <Button @click="$router.push(`/posts/${post.id}`)">
                Open
            </Button>
            <Button @click="$emit('remove', post)">
                Delete
            </Button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post_btns {
    display: flex;
  }
</style>