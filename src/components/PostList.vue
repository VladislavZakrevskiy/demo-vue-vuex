<template>
    <div v-show="posts.length > 0">
        <TransitionGroup name="post-list">
            <PostItem 
            v-for="post in posts" 
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
        />
        </TransitionGroup>
    </div>
    <h2 style="color: red;" v-show="posts.length === 0">
        Список постов пуст
    </h2>
</template>

<script>
    import { TransitionGroup } from 'vue';
import PostItem from './PostItem.vue';
    export default {
        components: { PostItem, TransitionGroup },
        props: {
            posts: {
                type: Array,
                required: true
            }
        } 
    }
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
    transition: transform 0.4s ease;
}
</style>